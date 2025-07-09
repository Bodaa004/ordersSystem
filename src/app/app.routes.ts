import { HomePageComponent } from './features/pages/home-page/home-page.component';
import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './core/layout/home-layout/home-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import(
            './features/pages/home-page/home-page.component'
          ).then((c) => c.HomePageComponent),
      },
    ],
  },
];
