import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import {
  provideQueryClient,
  QueryClient,
} from '@tanstack/angular-query-experimental';
import { client } from '../client-heyapi';
import { BASE_PATH } from '../client-openapi';
import { routes } from './app.routes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      throwOnError: true,
      retry: 0,
    },
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    // tanstack query
    provideQueryClient(queryClient),

    // @lubos this is required before you inject(HttpClient)
    provideHttpClient(withFetch()),

    // @lubos hey api
    provideAppInitializer(async () => {
      const httpClient = inject(HttpClient);

      client.setConfig({
        httpClient,
      });
    }),
    // openapi
    {
      provide: BASE_PATH,
      useFactory: () => location.origin,
    },
  ],
};
