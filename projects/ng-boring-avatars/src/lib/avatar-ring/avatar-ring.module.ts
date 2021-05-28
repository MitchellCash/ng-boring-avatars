import { NgModule } from '@angular/core';
import { AvatarRingComponent } from "./avatar-ring.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AvatarRingComponent],
  exports: [AvatarRingComponent]
})
export class AvatarRingModule {}
