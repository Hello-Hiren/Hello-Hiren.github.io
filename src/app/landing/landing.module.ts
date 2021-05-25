import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { LandingRoutingModule } from './landing-routing.module';
import { HomePgComponent } from './home-pg/home-pg.component';
import { SharedModule } from '../shared/shared.module';
import { LightboxModule } from 'ngx-lightbox';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    HomePgComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    LandingRoutingModule,
    SharedModule,
    LightboxModule,
    ModalModule.forRoot()
  ]
})
export class LandingModule { }
