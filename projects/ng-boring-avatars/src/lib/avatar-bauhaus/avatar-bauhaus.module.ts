import { NgModule } from '@angular/core';
import { AvatarBauhausComponent } from "./avatar-bauhaus.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AvatarBauhausComponent],
  exports: [AvatarBauhausComponent]
})
export class AvatarBauhausModule {}
