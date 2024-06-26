import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { HTML5Backend } from '@ng-dnd/multi-backend';
import { DndModule } from '@ng-dnd/core';
import { SortablejsModule } from 'nxt-sortablejs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    importProvidersFrom(
      MatNativeDateModule,
      DndModule.forRoot({ backend: HTML5Backend }),
      SortablejsModule.forRoot({
        animation: 250,
      })
    ),
  ],
};
