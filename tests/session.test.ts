import { test, expect } from 'vitest';
import builder from 'gql-query-builder';
import { signUpMutation } from './helpers/const';
import { cleanDatabase as cleanDatabaseBeforeAfterEachTest } from './helpers/database';
import { isRecent } from './helpers/time';
import { ctx, executeGraphQlQuery } from './helpers/server';

cleanDatabaseBeforeAfterEachTest();

const listSessionsQuery = builder.query({
  operation: 'sessions',
  fields: ['id', 'name', 'createdAt', 'createdBy', 'referenceExpiryDate', 'revokedAt', 'referenceTokenId', 'isUserCreated'],
});

const getRevokeSessionMutation = (sessionId: string) => builder.mutation({
  operation: 'revokeSession',
  variables: {
    sessionId: {
      value: sessionId,
      type: 'String!',
    },
  },
  fields: ['id', 'name', 'createdAt', 'createdBy', 'referenceExpiryDate', 'revokedAt', 'referenceTokenId', 'isUserCreated'],
});

const getCreateSessionMutation = (name: string, referenceExpiryDate: Date) => builder.mutation({
  operation: 'createSession',
  variables: {
    session: {
      value: {
        name,
        referenceExpiryDate,
      },
      type: 'SessionCreate',
      required: true,
    },
  },
  fields: ['session{name, id, referenceExpiryDate, isUserCreated}', 'token'],
});

test('Auth session: list', async () => {
  const { token } = (await executeGraphQlQuery(signUpMutation) as any).signUp;
  ctx.client.setHeader('Authorization', `Bearer ${token}`);
  const sessionsResponse = (await executeGraphQlQuery(listSessionsQuery)) as any;
  const executedAt = new Date();
  expect(sessionsResponse?.sessions?.length).toBe(1);
  const session = sessionsResponse?.sessions[0];
  expect(isRecent(new Date(session.createdAt), executedAt)).toBe(true);
  expect(session.isUserCreated).toBe(false);
});

test('Auth session: revoke', async () => {
  const { token } = (await executeGraphQlQuery(signUpMutation) as any).signUp;
  ctx.client.setHeader('Authorization', `Bearer ${token}`);
  const sessionsResponse = (await executeGraphQlQuery(listSessionsQuery)) as any;
  const session = sessionsResponse?.sessions[0];
  const mutation = getRevokeSessionMutation(session.id);
  const revokeResponse = (await executeGraphQlQuery(mutation)) as any;
  expect(revokeResponse?.revokeSession?.id).toBe(session.id);
  const revokedDate = new Date(revokeResponse?.revokeSession?.revokedAt);
  expect(isRecent(revokedDate, new Date())).toBe(true);
});

test('Auth session: create', async () => {
  const { token } = (await executeGraphQlQuery(signUpMutation) as any).signUp;
  ctx.client.setHeader('Authorization', `Bearer ${token}`);
  const expiryDate = new Date();
  const name = 'JoJo';
  const mutation = getCreateSessionMutation(name, expiryDate);
  const createResponse = (await executeGraphQlQuery(mutation)) as any;
  expect(createResponse?.createSession?.session.name).toBe(name);
  expect(
    createResponse?.createSession?.session.referenceExpiryDate,
  ).toBe(expiryDate.toISOString());
  const sessionsResponse = (await executeGraphQlQuery(listSessionsQuery)) as any;
  expect(sessionsResponse?.sessions?.length).toBe(2);
  expect(sessionsResponse?.sessions[1].isUserCreated).toBe(true);
});

test('Auth session: revoked session is forbidden', async () => {
  const { token } = (await executeGraphQlQuery(signUpMutation) as any).signUp;
  ctx.client.setHeader('Authorization', `Bearer ${token}`);
  const expiryDate = new Date();
  expiryDate.setDate(new Date().getDate() + 1);
  const name = 'JoJo';
  let mutation = getCreateSessionMutation(name, expiryDate);
  const createResponse = (await executeGraphQlQuery(mutation)) as any;
  const sessionId = createResponse?.createSession?.session.id;
  mutation = getRevokeSessionMutation(sessionId);
  await executeGraphQlQuery(mutation);
  ctx.client.setHeader('Authorization', `Bearer ${createResponse.createSession.token}`);
  const sessionsResponse = (await executeGraphQlQuery(listSessionsQuery)) as any;
  expect(sessionsResponse.errors[0].message).toBe('Session expired');
});
