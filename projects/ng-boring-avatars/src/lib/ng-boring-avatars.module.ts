import { NgModule } from '@angular/core';
import { AvatarBauhausModule } from './avatar-bauhaus/avatar-bauhaus.module';
import { AvatarBeamModule } from './avatar-beam/avatar-beam.module';
import { AvatarMarbleModule } from './avatar-marble/avatar-marble.module';
import { AvatarPixelModule } from './avatar-pixel/avatar-pixel.module';
import { AvatarRingModule } from './avatar-ring/avatar-ring.module';
import { AvatarSunsetModule } from './avatar-sunset/avatar-sunset.module';

@NgModule({
  exports: [
    AvatarBauhausModule,
    AvatarBeamModule,
    AvatarMarbleModule,
    AvatarPixelModule,
    AvatarRingModule,
    AvatarSunsetModule
  ]
})
export class NgBoringAvatarsModule { }
