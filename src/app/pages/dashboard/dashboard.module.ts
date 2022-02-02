import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    TranslateModule
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
