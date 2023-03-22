import type { Level } from 'pino';

type LogLevel = Level;
type DbLogLevel = 'info' | 'query' | 'warn' | 'error';

export declare interface LoggerConfig {
  moduleFilter: string[];
  prefixFilter: string[];
  logLevel: LogLevel;
  dbLogLevel: DbLogLevel[];
  httpLogLevel: LogLevel;
}
