import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutsComponent } from './layouts/admin-layouts/admin-layouts.component';
import { UserLayoutsComponent } from './layouts/user-layouts/user-layouts.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserLayoutsComponent,
    children: [
      {
        path: 'events',
        loadChildren: () =>
          import('./views/user/events/events.module').then(
            (m) => m.EventsModule
          ),
      },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutsComponent,
    children: [
      {
        path: 'createEvents',
        loadChildren: () =>
          import('./views/admin/create-events/create-events.module').then(
            (m) => m.CreateEventsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
