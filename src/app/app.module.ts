import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login-module/login/login.component';
import { RegisterComponent } from './login-module/register/register.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar'
import { ComponentsModule } from './components/components.module';
import { ApiService } from './services/api.service';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        AdminLayoutComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ComponentsModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatToolbarModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        ApiService
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
