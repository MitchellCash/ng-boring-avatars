import { NgModule } from '@angular/core';
import { AvatarPixelComponent } from "./avatar-pixel.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AvatarPixelComponent],
  exports: [AvatarPixelComponent]
})
export class AvatarPixelModule {}
