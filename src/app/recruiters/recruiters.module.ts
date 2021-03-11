import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruitersRoutingModule } from './recruiters-routing.module';
import { JobAdComponent } from './job-ad/job-ad.component';


@NgModule({
  declarations: [JobAdComponent],
  imports: [
    CommonModule,
    RecruitersRoutingModule
  ]
})
export class RecruitersModule { }
