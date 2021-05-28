import { NgModule } from '@angular/core';
import { AvatarSunsetComponent } from "./avatar-sunset.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AvatarSunsetComponent],
  exports: [AvatarSunsetComponent]
})
export class AvatarSunsetModule {}
