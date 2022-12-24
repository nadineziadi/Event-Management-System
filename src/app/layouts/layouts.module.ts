import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutsComponent } from './admin-layouts/admin-layouts.component';
import { UserLayoutsComponent } from './user-layouts/user-layouts.component';
import { __importStar } from 'tslib';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AdminLayoutsComponent, UserLayoutsComponent],
  imports: [CommonModule, RouterModule],
})
export class LayoutsModule {}
