import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from 'src/app/Pages/chatApplication/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const proRoutes: Routes = [
  {
    path: '', component: ContactComponent, pathMatch: 'prefix'
  },
]

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    FormsModule  ,

    RouterModule.forChild(proRoutes),
  ]
})
export class ContactModule { }
