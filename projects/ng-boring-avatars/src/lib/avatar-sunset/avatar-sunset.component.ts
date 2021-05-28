import { Component, Input, OnInit } from '@angular/core';
import { getNumber, getRandomColor } from '../utilities/utilities';

interface ISunsetElementProperties {
  color: string
}

@Component({
  selector: 'ng-boring-avatars-sunset-avatar',
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
          id="mask__sunset"
          maskUnits="userSpaceOnUse"
          x=0
          y=0
          [attr.width]="SIZE"
          [attr.height]="SIZE"
        >
          <circle [attr.cx]="SIZE/2" [attr.cy]="SIZE/2" [attr.r]="SIZE/2" fill="white" />
        </mask>
        <g mask="url(#mask__sunset)">
          <path [attr.fill]="'url(#gradient_paint0_linear_' + _name + ')'" d="M0 0h80v40H0z" />
          <path [attr.fill]="'url(#gradient_paint1_linear_' + _name + ')'" d="M0 40h80v40H0z" />
        </g>
        <defs>
          <linearGradient
            [attr.id]="'gradient_paint0_linear_' + _name"
            [attr.x1]="SIZE/2"
            y1=0
            [attr.x2]="SIZE/2"
            [attr.y2]="SIZE/2"
            gradientUnits="userSpaceOnUse"
          >
            <stop [attr.stop-color]="properties[0].color" />
            <stop offset=1 [attr.stop-color]="properties[1].color" />
          </linearGradient>
          <linearGradient
            [attr.id]="'gradient_paint1_linear_' + _name"
            [attr.x1]="SIZE/2"
            [attr.y1]="SIZE/2"
            [attr.x2]="SIZE/2"
            [attr.y2]="SIZE"
            gradientUnits="userSpaceOnUse"
          >
            <stop [attr.stop-color]="properties[2].color" />
            <stop offset=1 [attr.stop-color]="properties[3].color" />
          </linearGradient>
        </defs>
      </svg>
    </ng-container>
  `
})
export class AvatarSunsetComponent implements OnInit {
  @Input() colors: Array<string> | undefined;
  @Input() name: string | undefined;
  @Input() inputSize: number | undefined;

  private ELEMENTS = 4
  public _name: string = '';
  public SIZE = 80
  public properties: Array<ISunsetElementProperties> | undefined;

  ngOnInit() {
    if (this.name === undefined) {
      throw new Error("Input 'name' must be defined.");
    }

    if (this.colors === undefined) {
      throw new Error("Input 'name' must be defined.");
    }

    this.properties = this.generateColors(this.name, this.colors)
    this._name = this.name.replace(/\s/g, '');
  }

  generateColors(name: string, colors: Array<string>): Array<ISunsetElementProperties> {
    const numFromName = getNumber(name)
    const range = colors && colors.length

    return Array.from({length: this.ELEMENTS}, (_, i) => ({
      color: getRandomColor(numFromName + i, colors, range),
    }))
  }
}
