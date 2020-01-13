import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {SidebarModule} from 'primeng/sidebar';
import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SubcontentComponent } from './subcontent/subcontent.component';
import { IndiaComponent } from './india/india.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SubcontentComponent,
    IndiaComponent,
    HomepageComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    SidebarModule, AppRoutingModule, AccordionModule,
    InputTextModule, BrowserAnimationsModule, MatSliderModule,
    MatSidenavModule,  FormsModule , MatCheckboxModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
