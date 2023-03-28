/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./../src/context"
import type { FieldAuthorizeResolver } from "nexus/dist/plugins/fieldAuthorizePlugin"
import type { core, connectionPluginCore } from "nexus"
import type { ArgsValidationConfig, HasTypeField } from "nexus-validation-plugin/utils"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * Date custom scalar type
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "GQLDateBase";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * Date custom scalar type
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "GQLDateBase";
    /**
     * Adds a Relay-style connection to the type, with numerous options for configuration
     *
     * @see https://nexusjs.org/docs/plugins/connection
     */
    connectionField<FieldName extends string>(
      fieldName: FieldName,
      config: connectionPluginCore.ConnectionFieldConfig<TypeName, FieldName>
    ): void
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  SessionCreate: { // input type
    name: string; // String!
    referenceExpiryDate: NexusGenScalars['GQLDateBase']; // GQLDateBase!
  }
  UserNamePass: { // input type
    password: string; // String!
    username: string; // String!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  GQLDateBase: any
}

export interface NexusGenObjects {
  AuthPayload: { // root type
    session?: NexusGenRootTypes['Session'] | null; // Session
    token?: string | null; // String
  }
  CoreUnit: { // root type
    code?: string | null; // String
    descriptionParagraph?: string | null; // String
    descriptionParagraphImageSource?: string | null; // String
    descriptionSentence?: string | null; // String
    id?: string | null; // String
    imageSource?: string | null; // String
    name?: string | null; // String
    shortCode?: string | null; // String
  }
  Mutation: {};
  Query: {};
  Session: { // root type
    createdAt: NexusGenScalars['GQLDateBase']; // GQLDateBase!
    createdBy: string; // String!
    id: string; // String!
    isUserCreated: boolean; // Boolean!
    name?: string | null; // String
    referenceExpiryDate: NexusGenScalars['GQLDateBase']; // GQLDateBase!
    referenceTokenId: string; // String!
    revokedAt?: NexusGenScalars['GQLDateBase'] | null; // GQLDateBase
  }
  SessionCreateOutput: { // root type
    session: NexusGenRootTypes['Session']; // Session!
    token: string; // String!
  }
  User: { // root type
    id?: string | null; // String
    password?: string | null; // String
    username?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    session: NexusGenRootTypes['Session'] | null; // Session
    token: string | null; // String
  }
  CoreUnit: { // field return type
    code: string | null; // String
    descriptionParagraph: string | null; // String
    descriptionParagraphImageSource: string | null; // String
    descriptionSentence: string | null; // String
    id: string | null; // String
    imageSource: string | null; // String
    name: string | null; // String
    shortCode: string | null; // String
  }
  Mutation: { // field return type
    createSession: NexusGenRootTypes['SessionCreateOutput'] | null; // SessionCreateOutput
    revokeSession: NexusGenRootTypes['Session'] | null; // Session
    signIn: NexusGenRootTypes['AuthPayload'] | null; // AuthPayload
    signUp: NexusGenRootTypes['AuthPayload'] | null; // AuthPayload
  }
  Query: { // field return type
    coreUnit: NexusGenRootTypes['CoreUnit'] | null; // CoreUnit
    coreUnits: Array<NexusGenRootTypes['CoreUnit'] | null> | null; // [CoreUnit]
    me: NexusGenRootTypes['User'] | null; // User
    sessions: Array<NexusGenRootTypes['Session'] | null> | null; // [Session]
  }
  Session: { // field return type
    createdAt: NexusGenScalars['GQLDateBase']; // GQLDateBase!
    createdBy: string; // String!
    id: string; // String!
    isUserCreated: boolean; // Boolean!
    name: string | null; // String
    referenceExpiryDate: NexusGenScalars['GQLDateBase']; // GQLDateBase!
    referenceTokenId: string; // String!
    revokedAt: NexusGenScalars['GQLDateBase'] | null; // GQLDateBase
  }
  SessionCreateOutput: { // field return type
    session: NexusGenRootTypes['Session']; // Session!
    token: string; // String!
  }
  User: { // field return type
    id: string | null; // String
    password: string | null; // String
    username: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  AuthPayload: { // field return type name
    session: 'Session'
    token: 'String'
  }
  CoreUnit: { // field return type name
    code: 'String'
    descriptionParagraph: 'String'
    descriptionParagraphImageSource: 'String'
    descriptionSentence: 'String'
    id: 'String'
    imageSource: 'String'
    name: 'String'
    shortCode: 'String'
  }
  Mutation: { // field return type name
    createSession: 'SessionCreateOutput'
    revokeSession: 'Session'
    signIn: 'AuthPayload'
    signUp: 'AuthPayload'
  }
  Query: { // field return type name
    coreUnit: 'CoreUnit'
    coreUnits: 'CoreUnit'
    me: 'User'
    sessions: 'Session'
  }
  Session: { // field return type name
    createdAt: 'GQLDateBase'
    createdBy: 'String'
    id: 'String'
    isUserCreated: 'Boolean'
    name: 'String'
    referenceExpiryDate: 'GQLDateBase'
    referenceTokenId: 'String'
    revokedAt: 'GQLDateBase'
  }
  SessionCreateOutput: { // field return type name
    session: 'Session'
    token: 'String'
  }
  User: { // field return type name
    id: 'String'
    password: 'String'
    username: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createSession: { // args
      session: NexusGenInputs['SessionCreate']; // SessionCreate!
    }
    revokeSession: { // args
      sessionId: string; // String!
    }
    signIn: { // args
      user: NexusGenInputs['UserNamePass']; // UserNamePass!
    }
    signUp: { // args
      user: NexusGenInputs['UserNamePass']; // UserNamePass!
    }
  }
  Query: {
    coreUnit: { // args
      id?: string | null; // String
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * Authorization for an individual field. Returning "true"
     * or "Promise<true>" means the field can be accessed.
     * Returning "false" or "Promise<false>" will respond
     * with a "Not Authorized" error for the field.
     * Returning or throwing an error will also prevent the
     * resolver from executing.
     */
    authorize?: FieldAuthorizeResolver<TypeName, FieldName>
    
    /**
     * Async validation function. Reject when validation fails. Resolve otherwise.
     */
    validate?: 
        NexusGenArgTypes extends HasTypeField<TypeName, FieldName>
        ? ArgsValidationConfig<NexusGenArgTypes[TypeName][FieldName]>
        : never
        
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}