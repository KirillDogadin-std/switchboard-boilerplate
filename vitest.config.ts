import { defineConfig, UserConfigExport } from 'vitest/config';

export const getVitestConfig = (fullyCoveredModulePaths?: string[]): UserConfigExport => {
  const coverage = !!fullyCoveredModulePaths && fullyCoveredModulePaths.length !== 0 ? 100 : 90;
  return {
    test: {
      coverage: {
        provider: 'istanbul',
        lines: coverage,
        functions: coverage,
        statements: coverage,
        include: fullyCoveredModulePaths || undefined,
      },
      singleThread: true,
    },
  };
};

export default defineConfig(getVitestConfig());
