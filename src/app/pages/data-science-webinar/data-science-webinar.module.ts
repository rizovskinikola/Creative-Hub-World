import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataScienceWebinarComponent } from './data-science-webinar.component';
import {RouterModule, Routes} from "@angular/router";
import { WebinarHeaderModule } from 'src/app/modules/webinar-header/webinar-header.module';
import { WebinarContainerModule } from 'src/app/modules/webinar-container/webinar-container.module';
import { WebinarFooterModule } from 'src/app/modules/webinar-footer/webinar-footer.module';


const routes: Routes = [{
  path: '',
  component: DataScienceWebinarComponent
}]

@NgModule({
  declarations: [
    DataScienceWebinarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WebinarHeaderModule,
    WebinarContainerModule,
    WebinarFooterModule
   ]
})
export class DataScienceWebinarModule { }
