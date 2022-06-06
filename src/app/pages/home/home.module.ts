import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { CvComponent } from './cv/cv.component';


@NgModule({
  declarations: [HomePageComponent, AboutMeComponent, CvComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
