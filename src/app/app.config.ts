import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  provideQueryClient,
  QueryClient,
} from '@tanstack/angular-query-experimental';
import { BASE_PATH } from '../client-openapi';
import { routes } from './app.routes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    // hey api
    provideQueryClient(queryClient),

    // openapi
    provideHttpClient(withFetch()),
    {
      provide: BASE_PATH,
      useFactory: () => location.origin,
    },
  ],
};
