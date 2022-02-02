/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import { NbAlertModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbInputModule, NbLayoutModule } from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthComponent } from './auth.component';
import { ThemeModule } from 'app/@theme/theme.module';
import { RegisterComponent } from './register/register.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbCardModule,
    NbLayoutModule,
    AuthRoutingModule,
    TranslateModule,
    NbAuthModule,
    ThemeModule,
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
  ],
})
export class AuthModule {
}