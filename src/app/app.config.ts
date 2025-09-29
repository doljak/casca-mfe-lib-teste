import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { 
  libRoutes, 
  API_BASE_URL, 
  TODO_API_URL, 
  CMS_API_URL, 
  AUTH_API_URL, 
  LIB_ENV,
  provideApiUrls
} from 'doljak-lib-to-do-list'
import { environment } from '../../environments/environment';

const LIB_ENV_VALUES_FOR_CASCA= {
  apiBaseUrl: environment.apiBaseUrl,
  endpoints: environment.endpoints
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(libRoutes),
    // { provide: API_BASE_URL, useValue: 'http://localhost:3000' },
    // { provide: TODO_API_URL, useValue: 'https://todo.api.com' },
    // { provide: CMS_API_URL, useValue: 'https://cms.api.com' },
    // { provide: AUTH_API_URL, useValue: 'https://auth.api.com' },
    // ...provideApiUrls({
    //   baseUrl: 'http://your-api-domain.com',
    //   todoBaseUrl: 'http://your-todo-api.com',          // Optional
    //   cmsBaseUrl: 'http://your-cms-api.com',            // Optional
    //   authBaseUrl: 'http://your-auth-api.com',           // Optional
    //   configmapBaseUrl: 'http://your-configmap-api.com' // Optional 
    // }),
    { provide: LIB_ENV, useValue: LIB_ENV_VALUES_FOR_CASCA}
  ],

};
