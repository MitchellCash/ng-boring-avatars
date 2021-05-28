import { NgModule } from '@angular/core';
import { AvatarMarbleComponent } from "./avatar-marble.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AvatarMarbleComponent],
  exports: [AvatarMarbleComponent]
})
export class AvatarMarbleModule {}
