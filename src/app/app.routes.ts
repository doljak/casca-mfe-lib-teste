import { Routes } from '@angular/router';
import { libRoutes } from 'doljak-lib-to-do-list';

export const routes: Routes = [
{
    path: 'lib',
    children: libRoutes
  }
];
