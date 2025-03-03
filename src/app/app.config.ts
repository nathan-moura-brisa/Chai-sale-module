import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { getSingleSpaExtraProviders } from 'single-spa-angular';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [getSingleSpaExtraProviders(),
    provideRouter([{path: '**', component: EmptyRouteComponent }]),
    {provide: APP_BASE_HREF, useValue: '/'}
  ]
};
