import { NgModule } from '@angular/core';
import { AvatarBeamComponent } from "./avatar-beam.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AvatarBeamComponent],
  exports: [AvatarBeamComponent]
})
export class AvatarBeamModule {}
