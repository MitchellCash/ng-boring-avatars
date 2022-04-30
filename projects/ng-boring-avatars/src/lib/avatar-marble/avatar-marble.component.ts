import { Component, Input, OnInit } from '@angular/core';
import { getNumber, getRandomColor, getUnit } from '../utilities/utilities';

interface IMarbleElementProperties {
  color: string
  rotate: number
  scale: number
  translateX: number
  translateY: number
}

@Component({
  selector: 'ng-boring-avatars-marble-avatar',
  template: `
    <ng-container *ngIf="properties">
      <svg
        [attr.viewBox]="'0 0 ' + SIZE + ' ' + SIZE"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        [attr.width]="inputSize"
        [attr.height]="inputSize"
        [attr.colors]="colors"
        [attr.name]="name"
        [attr.size]="inputSize"
      >
        <mask
          [attr.id]="mask_id"
          maskUnits="userSpaceOnUse"
          x=0
          y=0
          [attr.width]="SIZE"
          [attr.height]="SIZE"
        >
          <path
            d="M80 40C80 17.909 62.091 0 40 0S0 17.909 0 40s17.909 40 40 40 40-17.909 40-40z"
            fill="#fff"
          />
        </mask>
        <g [attr.mask]="'url(#'+mask_id+')'">
          <path
            d="M80 40C80 17.909 62.091 0 40 0S0 17.909 0 40s17.909 40 40 40 40-17.909 40-40z"
            [attr.fill]="properties[0].color"
          />
          <path
            filter="url(#prefix__filter0_f)"
            d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
            [attr.fill]="properties[1].color"
            [attr.transform]="'translate(' + properties[1].translateX + ' ' + properties[1].translateY + ') rotate(' + properties[1].rotate + ' ' + SIZE / 2 + ' ' + SIZE / 2  + ') scale(' + (properties[2].scale) + ')'"
          />
          <path
            filter="url(#prefix__filter0_f)"
            style="mix-blend-mode: overlay;"
            d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
            [attr.fill]="properties[2].color"
            [attr.transform]="'translate(' + properties[2].translateX + ' ' + properties[2].translateY + ') rotate(' + properties[2].rotate + ' ' + SIZE / 2 + ' ' + SIZE / 2  + ') scale(' + (properties[2].scale) + ')'"
          />
        </g>
        <defs>
          <filter
            id="prefix__filter0_f"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity=0 result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation=7 result="effect1_foregroundBlur" />
          </filter>
        </defs>
      </svg>
    </ng-container>
  `
})
export class AvatarMarbleComponent implements OnInit {
  @Input() colors: Array<string> | undefined;
  @Input() name: string | undefined;
  @Input() inputSize: number | undefined;

  private ELEMENTS = 3
  public properties: Array<IMarbleElementProperties> | undefined;
  public SIZE = 80
  mask_id: string = 'mask__marble' + Math.random().toString(36).substr(2, 9);
  ngOnInit() {
    if (this.name === undefined) {
      throw new Error("Input 'name' must be defined.");
    }

    if (this.colors === undefined) {
      throw new Error("Input 'name' must be defined.");
    }

    this.properties = this.generateColors(this.name, this.colors);
  }

  private generateColors(name: string, colors: Array<string>): Array<IMarbleElementProperties> {
    const numFromName = getNumber(name)
    const range = colors && colors.length

    return Array.from({ length: this.ELEMENTS }, (_, i) => ({
      color: getRandomColor(numFromName + i, colors, range),
      translateX: getUnit(numFromName * (i + 1), this.SIZE / 10, 1),
      translateY: getUnit(numFromName * (i + 1), this.SIZE / 10, 2),
      scale: (1.2 + (getUnit(numFromName * (i + 1), this.SIZE / 20, null) / 10)),
      rotate: getUnit(numFromName * (i + 1), 360, 1)
    }));
  }
}
