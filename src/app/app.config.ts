import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { getSingleSpaExtraProviders } from 'single-spa-angular';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';
import { provideHttpClient } from "@angular/common/http";


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    getSingleSpaExtraProviders(),
    provideRouter(routes),
    { provide: APP_BASE_HREF, useValue: '/sale/' },
  ],
};
