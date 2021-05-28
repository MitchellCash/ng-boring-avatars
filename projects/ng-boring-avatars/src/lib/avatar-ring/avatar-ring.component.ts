import { Component, Input, OnInit } from '@angular/core';
import { getNumber, getRandomColor } from '../utilities/utilities';

@Component({
  selector: 'ng-boring-avatars-ring-avatar',
  template: `
    <ng-container *ngIf="cellColors">
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
        <path d="M90 45a45.001 45.001 0 00-76.82-31.82A45 45 0 000 45h90z" [attr.fill]="cellColors[0]" />
        <path d="M90 45a45.001 45.001 0 01-76.82 31.82A45 45 0 010 45h90z" [attr.fill]="cellColors[1]" />
        <path d="M83 45a38 38 0 00-76 0h76z" [attr.fill]="cellColors[2]" />
        <path d="M83 45a38 38 0 01-76 0h76z" [attr.fill]="cellColors[3]" />
        <path d="M77 45a32 32 0 10-64 0h64z" [attr.fill]="cellColors[4]" />
        <path d="M77 45a32 32 0 11-64 0h64z" [attr.fill]="cellColors[5]" />
        <path d="M71 45a26 26 0 00-52 0h52z" [attr.fill]="cellColors[6]" />
        <path d="M71 45a26 26 0 01-52 0h52z" [attr.fill]="cellColors[7]" />
        <circle cx=45 cy=45 r=23 [attr.fill]="cellColors[8]" />
      </svg>
    </ng-container>
  `
})
export class AvatarRingComponent implements OnInit {
  @Input() colors: Array<string> | undefined;
  @Input() name: string | undefined;
  @Input() inputSize: number | undefined;

  private COLORS = 5
  public SIZE = 90
  public cellColors: Array<string> | undefined;

  ngOnInit() {
    if (this.name === undefined) {
      throw new Error("Input 'name' must be defined.");
    }

    if (this.colors === undefined) {
      throw new Error("Input 'name' must be defined.");
    }

    this.cellColors = this.generateColors(this.colors, this.name)
  }

  generateColors(colors: Array<string>, name: string): Array<string> {
    const numFromName = getNumber(name)
    const range = colors && colors.length
    const colorsShuffle = Array.from({length: this.COLORS}, (_, i) => getRandomColor(numFromName + (i+1), colors, range));
    const iconColors = []
    iconColors[0] = colorsShuffle[0]
    iconColors[1] = colorsShuffle[1]
    iconColors[2] = colorsShuffle[1]
    iconColors[3] = colorsShuffle[2]
    iconColors[4] = colorsShuffle[2]
    iconColors[5] = colorsShuffle[3]
    iconColors[6] = colorsShuffle[3]
    iconColors[7] = colorsShuffle[0]
    iconColors[8] = colorsShuffle[4]

    return iconColors
  }
}
