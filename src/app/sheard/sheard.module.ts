import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SheardRoutingModule } from './sheard-routing.module';
import { HeaderComponent } from './componants/header/header.component';
import { FooterComponent } from './componants/footer/footer.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SheardRoutingModule, HeaderComponent,FooterComponent
  ],
  exports: [ HeaderComponent, FooterComponent]

})
export class SheardModule {}
