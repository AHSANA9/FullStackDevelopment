import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Includes/Header/header/header.component';


const routes: Routes = [
  { path: 'Chat', loadChildren: () => import('./AppModules/chat-interface/chat-interface.module').then(m => m.ChatInterfaceModule) },
  { path: 'Contact', loadChildren: () => import('./AppModules/contact/contact.module').then(m => m.ContactModule) },
  ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
     RouterModule.forRoot(routes),
     FormsModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
