import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { MasterContainerComponent } from './master-container/master-container.component';
import { CustomIfDirective } from './directives/custom-if.directive';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomAttributeStyleDirective } from './directives/custom-attribute-style.directive';
import { ShortenPipe } from './pipes/shorten.pipe';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MasterContainerComponent,
    CustomIfDirective,    
    DirectiveDemoComponent,
    PageNotFoundComponent,
    CustomAttributeStyleDirective,
    ShortenPipe,
    PipeDemoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,    
    MaterialModule,  
  ],
  exports: [MaterialModule],
  providers: [
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
