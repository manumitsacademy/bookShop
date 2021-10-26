import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    ContactusComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ContactusComponent,FooterComponent]
})
export class SharedModule { }
