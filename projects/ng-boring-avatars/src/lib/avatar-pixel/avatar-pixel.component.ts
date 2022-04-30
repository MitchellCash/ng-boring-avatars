import { Component, Input, OnInit } from '@angular/core';
import { getNumber, getRandomColor } from '../utilities/utilities';

interface IPixelElementProperties {
  color: string
}

@Component({
  selector: 'ng-boring-avatars-pixel-avatar',
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
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x=0
          y=0
          [attr.width]="SIZE"
          [attr.height]="SIZE"
        >
          <circle [attr.cx]="SIZE/2" [attr.cy]="SIZE/2" [attr.r]="SIZE/2" fill="white" />
        </mask>
        <g [attr.mask]="'url(#'+mask_id+')'">
          <rect width=10 height=10 [attr.fill]="properties[0].color" />
          <rect x=20 width=10 height=10 [attr.fill]="properties[1].color" />
          <rect x=40 width=10 height=10 [attr.fill]="properties[2].color" />
          <rect x=60 width=10 height=10 [attr.fill]="properties[3].color" />
          <rect x=10 width=10 height=10 [attr.fill]="properties[4].color" />
          <rect x=30 width=10 height=10 [attr.fill]="properties[5].color" />
          <rect x=50 width=10 height=10 [attr.fill]="properties[6].color" />
          <rect x=70 width=10 height=10 [attr.fill]="properties[7].color" />
          <rect y=10 width=10 height=10 [attr.fill]="properties[8].color" />
          <rect y=20 width=10 height=10 [attr.fill]="properties[9].color" />
          <rect y=30 width=10 height=10 [attr.fill]="properties[10].color" />
          <rect y=40 width=10 height=10 [attr.fill]="properties[11].color" />
          <rect y=50 width=10 height=10 [attr.fill]="properties[12].color" />
          <rect y=60 width=10 height=10 [attr.fill]="properties[13].color" />
          <rect y=70 width=10 height=10 [attr.fill]="properties[14].color" />
          <rect x=20 y=10 width=10 height=10 [attr.fill]="properties[15].color" />
          <rect x=20 y=20 width=10 height=10 [attr.fill]="properties[16].color" />
          <rect x=20 y=30 width=10 height=10 [attr.fill]="properties[17].color" />
          <rect x=20 y=40 width=10 height=10 [attr.fill]="properties[18].color" />
          <rect x=20 y=50 width=10 height=10 [attr.fill]="properties[19].color" />
          <rect x=20 y=60 width=10 height=10 [attr.fill]="properties[20].color" />
          <rect x=20 y=70 width=10 height=10 [attr.fill]="properties[21].color" />
          <rect x=40 y=10 width=10 height=10 [attr.fill]="properties[22].color" />
          <rect x=40 y=20 width=10 height=10 [attr.fill]="properties[23].color" />
          <rect x=40 y=30 width=10 height=10 [attr.fill]="properties[24].color" />
          <rect x=40 y=40 width=10 height=10 [attr.fill]="properties[25].color" />
          <rect x=40 y=50 width=10 height=10 [attr.fill]="properties[26].color" />
          <rect x=40 y=60 width=10 height=10 [attr.fill]="properties[27].color" />
          <rect x=40 y=70 width=10 height=10 [attr.fill]="properties[28].color" />
          <rect x=60 y=10 width=10 height=10 [attr.fill]="properties[29].color" />
          <rect x=60 y=20 width=10 height=10 [attr.fill]="properties[30].color" />
          <rect x=60 y=30 width=10 height=10 [attr.fill]="properties[31].color" />
          <rect x=60 y=40 width=10 height=10 [attr.fill]="properties[32].color" />
          <rect x=60 y=50 width=10 height=10 [attr.fill]="properties[33].color" />
          <rect x=60 y=60 width=10 height=10 [attr.fill]="properties[34].color" />
          <rect x=60 y=70 width=10 height=10 [attr.fill]="properties[35].color" />
          <rect x=10 y=10 width=10 height=10 [attr.fill]="properties[36].color" />
          <rect x=10 y=20 width=10 height=10 [attr.fill]="properties[37].color" />
          <rect x=10 y=30 width=10 height=10 [attr.fill]="properties[38].color" />
          <rect x=10 y=40 width=10 height=10 [attr.fill]="properties[39].color" />
          <rect x=10 y=50 width=10 height=10 [attr.fill]="properties[40].color" />
          <rect x=10 y=60 width=10 height=10 [attr.fill]="properties[41].color" />
          <rect x=10 y=70 width=10 height=10 [attr.fill]="properties[42].color" />
          <rect x=30 y=10 width=10 height=10 [attr.fill]="properties[43].color" />
          <rect x=30 y=20 width=10 height=10 [attr.fill]="properties[44].color" />
          <rect x=30 y=30 width=10 height=10 [attr.fill]="properties[45].color" />
          <rect x=30 y=40 width=10 height=10 [attr.fill]="properties[46].color" />
          <rect x=30 y=50 width=10 height=10 [attr.fill]="properties[47].color" />
          <rect x=30 y=60 width=10 height=10 [attr.fill]="properties[48].color" />
          <rect x=30 y=70 width=10 height=10 [attr.fill]="properties[49].color" />
          <rect x=50 y=10 width=10 height=10 [attr.fill]="properties[50].color" />
          <rect x=50 y=20 width=10 height=10 [attr.fill]="properties[51].color" />
          <rect x=50 y=30 width=10 height=10 [attr.fill]="properties[52].color" />
          <rect x=50 y=40 width=10 height=10 [attr.fill]="properties[53].color" />
          <rect x=50 y=50 width=10 height=10 [attr.fill]="properties[54].color" />
          <rect x=50 y=60 width=10 height=10 [attr.fill]="properties[55].color" />
          <rect x=50 y=70 width=10 height=10 [attr.fill]="properties[56].color" />
          <rect x=70 y=10 width=10 height=10 [attr.fill]="properties[57].color" />
          <rect x=70 y=20 width=10 height=10 [attr.fill]="properties[58].color" />
          <rect x=70 y=30 width=10 height=10 [attr.fill]="properties[59].color" />
          <rect x=70 y=40 width=10 height=10 [attr.fill]="properties[60].color" />
          <rect x=70 y=50 width=10 height=10 [attr.fill]="properties[61].color" />
          <rect x=70 y=60 width=10 height=10 [attr.fill]="properties[62].color" />
          <rect x=70 y=70 width=10 height=10 [attr.fill]="properties[63].color" />
        </g>
      </svg>
    </ng-container>
  `
})
export class AvatarPixelComponent implements OnInit {
  @Input() colors: Array<string> | undefined;
  @Input() name: string | undefined;
  @Input() inputSize: number | undefined;

  private ELEMENTS = 64
  public SIZE = 80
  public properties: Array<IPixelElementProperties> | undefined;
  mask_id: string = 'mask0' + Math.random().toString(36).substr(2, 9);
  ngOnInit() {
    if (this.name === undefined) {
      throw new Error("Input 'name' must be defined.");
    }

    if (this.colors === undefined) {
      throw new Error("Input 'name' must be defined.");
    }

    this.properties = this.generateColors(this.name, this.colors)
  }

  generateColors(name: string, colors: Array<string>): Array<IPixelElementProperties> {
    const numFromName = getNumber(name)
    const range = colors && colors.length

    return Array.from({length: this.ELEMENTS}, (_, i) => ({
      color: getRandomColor(numFromName % (i + 13), colors, range),
    }))
  }
}
