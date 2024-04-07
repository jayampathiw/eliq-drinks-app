import {
  APP_INITIALIZER,
  ApplicationConfig,
  importProvidersFrom,
} from '@angular/core';

import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { ConfigurationService } from './configuration/service/configuration.service';
import { HttpClientModule } from '@angular/common/http';

function initializeConfig(configService: ConfigurationService) {
  return () => configService.loadConfig();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeConfig,
      multi: true,
      deps: [ConfigurationService],
    },
  ],
};
