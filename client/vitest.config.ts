import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/**/__tests__/*.{js,ts,jsx,tsx}'],
    coverage: {
      watermarks: {
        statements: [50, 80],
        functions: [50, 80],
        branches: [50, 80],
        lines: [50, 80],
      },
    },
  },
});
