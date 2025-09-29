import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { 
  libRoutes, 
  API_BASE_URL, 
  TODO_API_URL, 
  CMS_API_URL, 
  AUTH_API_URL, 
  LIB_ENV,
  LibEnvironment
} from 'doljak-lib-to-do-list'
import { environment } from '../../environments/environment';

const LIB_ENV_VALUES_FOR_CASCA:LibEnvironment= {
  //apiBaseUrl: environment.apiBaseUrl,
  endpoints: environment.endpoints
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(libRoutes),
    { provide: LIB_ENV, useValue: LIB_ENV_VALUES_FOR_CASCA},
    { provide: API_BASE_URL, useValue: 'http://localhost:3000' },
  ],

};
