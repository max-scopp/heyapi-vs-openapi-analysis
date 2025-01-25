import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  client: '@hey-api/client-fetch',
  input: 'project-api.yaml',
  output: 'src/client-heyapi',
  experimentalParser: true,
  plugins: ['@hey-api/transformers', '@tanstack/angular-query-experimental'],
});
