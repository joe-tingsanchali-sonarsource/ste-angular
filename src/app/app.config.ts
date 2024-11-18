import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// Example bug: Hardcoded credentials
const API_KEY = '12345-ABCDE'; // This should trigger a SonarQube warning

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

