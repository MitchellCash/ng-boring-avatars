import { Component, Input, OnInit } from '@angular/core';
import { getBoolean, getContrast, getNumber, getRandomColor, getUnit } from '../utilities/utilities';

interface IBeamData {
  backgroundColor: string
  eyeSpread: number
  faceColor: string
  faceRotate: number
  faceTranslateX: number
  faceTranslateY: number
  isCircle: boolean
  isMouthOpen: boolean
  mouthSpread: number
  wrapperColor: string
  wrapperRotate: number
  wrapperScale: number
  wrapperTranslateX: number
  wrapperTranslateY: number
}

@Component({
  selector: 'ng-boring-avatars-beam-avatar',
  template: `
    <ng-container *ngIf="data">
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
          id="mask__beam"
          maskUnits="userSpaceOnUse"
          x=0
          y=0
          [attr.width]="SIZE"
          [attr.height]="SIZE"
        >
          <rect
            [attr.width]="SIZE"
            [attr.height]="SIZE"
            rx=20
            fill="white"
          />
        </mask>
        <g mask="url(#mask__beam)" fill="transparent">
          <rect
            [attr.width]="SIZE"
            [attr.height]="SIZE"
            rx=20
            [attr.fill]="data.backgroundColor"
          />
          <rect
            x="0"
            y="0"
            [attr.width]="SIZE"
            [attr.height]="SIZE"
            [attr.transform]="'translate(' + data.wrapperTranslateX + ' ' + data.wrapperTranslateY + ') rotate(' + data.wrapperRotate + ' ' + SIZE / 2 + ' ' + SIZE / 2  + ') scale(' + data.wrapperScale + ')'"
            [attr.fill]="data.wrapperColor"
            [attr.rx]="data.isCircle ? SIZE : SIZE/6"
          />
          <g
            [attr.transform]="'translate(' + data.faceTranslateX + ' ' + data.faceTranslateY + ') rotate('+ data.faceRotate + ' ' + SIZE / 2 + ' ' + SIZE / 2  +')'"
          >
            <path *ngIf="data.isMouthOpen" [attr.d]="'M15 ' + (19 + data.mouthSpread) + 'c2 1 4 1 6 0'" [attr.stroke]="data.faceColor" fill="none" stroke-linecap="round" />
            <path *ngIf="!data.isMouthOpen" [attr.d]="'M13,'+ (19 + data.mouthSpread) + ' a1,0.75 0 0,0 10,0'" [attr.fill]="data.faceColor" />
            <rect [attr.x]="14 - data.eyeSpread" y=14 width=1.5 height=2 rx=1 stroke="none" [attr.fill]="data.faceColor" />
            <rect [attr.x]="20 + data.eyeSpread" y=14 width=1.5 height=2 rx=1 stroke="none" [attr.fill]="data.faceColor" />
          </g>
        </g>
      </svg>
    </ng-container>
  `
})
export class AvatarBeamComponent implements OnInit {
  @Input() colors: Array<string> | undefined;
  @Input() name: string | undefined;
  @Input() inputSize: number | undefined;

  public SIZE = 36;
  public data: IBeamData | undefined;

  ngOnInit() {
    if (this.name === undefined) {
      throw new Error("Input 'name' must be defined.");
    }

    if (this.colors === undefined) {
      throw new Error("Input 'name' must be defined.");
    }

    this.data = this.generateData(this.name, this.colors);
  }

  generateData(name: string, colors: Array<string>): IBeamData {
    const numFromName = getNumber(name)
    const range = colors && colors.length
    const wrapperColor = getRandomColor(numFromName, colors, range)
    const preTranslateX = getUnit(numFromName, 10, 1)
    const wrapperTranslateX = preTranslateX < 5 ? (preTranslateX + this.SIZE / 9) : preTranslateX
    const preTranslateY = getUnit(numFromName, 10, 2)
    const wrapperTranslateY = preTranslateY < 5 ? (preTranslateY + this.SIZE / 9) : preTranslateY


    return {
      wrapperColor: wrapperColor,
      faceColor: getContrast(wrapperColor),
      backgroundColor: getRandomColor(numFromName + 13, colors, range),
      wrapperTranslateX: wrapperTranslateX,
      wrapperTranslateY: wrapperTranslateY,
      wrapperRotate: getUnit(numFromName, 360, null),
      wrapperScale: (1 + (getUnit(numFromName, this.SIZE / 12, null) / 10)),
      isMouthOpen: getBoolean(numFromName, 2),
      isCircle: getBoolean(numFromName, 1),
      eyeSpread: getUnit(numFromName, 5, null),
      mouthSpread: getUnit(numFromName, 3, null),
      faceRotate: getUnit(numFromName, 10, 3),
      faceTranslateX: wrapperTranslateX > (this.SIZE / 6) ? wrapperTranslateX / 2 : getUnit(numFromName, 8, 1),
      faceTranslateY: wrapperTranslateY > (this.SIZE / 6) ? wrapperTranslateY / 2 : getUnit(numFromName, 7, 2),
    }
  }
}
