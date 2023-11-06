import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoaderComponent } from './page-loader.component';



@NgModule({
    declarations: [
        PageLoaderComponent
    ],
    exports: [
        PageLoaderComponent
    ],
    imports: [
        CommonModule
    ]
})
export class PageLoaderModule { }
