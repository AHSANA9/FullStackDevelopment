import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChatInterfaceComponent } from 'src/app/Pages/chatApplication/chat-interface/chat-interface.component';

const proRoutes: Routes = [
  {
    path: '', component: ChatInterfaceComponent, 
  },
 
]

@NgModule({
  declarations: [
    ChatInterfaceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(proRoutes),
  ]
})
export class ChatInterfaceModule { }
