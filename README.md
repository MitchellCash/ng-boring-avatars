# ng-boring-avatars

![ng-boring-avatars](https://user-images.githubusercontent.com/8009243/120009571-03a44000-bfd4-11eb-9a41-f1d511cb4f13.png)

Based on the awesome [React Boring Avatars](https://github.com/boringdesigners/boring-avatars)
project this is the tiny Angular library that generates custom, SVG-based, round avatars from any
username and color palette.

For a demo of how the avatars render please check out the [Boring Designers](https://github.com/boringdesigners)
demo website. Although based around React you can expect the same results in Angular with this
library. 

## Install

```sh
yarn add ng-boring-avatars
```

or

```sh
npm install ng-boring-avatars
```

## Usage

1. Import `NgBoringAvatarsModule` into your `app.module.ts` file.

2. Then in your component template you can use:

```html
<!-- Bauhaus Avatar -->
<ng-boring-avatars-bauhaus-avatar
  name="Mary Baker"
  [colors]="['#a3a948','#edb92e','#f85931','#ce1836','#009989']"
  [inputSize]="80"
></ng-boring-avatars-bauhaus-avatar>

<!-- Beam Avatar -->
<ng-boring-avatars-beam-avatar
  name="Mary Baker"
  [colors]="['#a3a948','#edb92e','#f85931','#ce1836','#009989']"
  [inputSize]="80"
></ng-boring-avatars-beam-avatar>

<!-- Marble Avatar -->
<ng-boring-avatars-marble-avatar
  name="Mary Baker"
  [colors]="['#a3a948','#edb92e','#f85931','#ce1836','#009989']"
  [inputSize]="80"
></ng-boring-avatars-marble-avatar>

<!-- Pixel Avatar -->
<ng-boring-avatars-pixel-avatar
  name="Mary Baker"
  [colors]="['#a3a948','#edb92e','#f85931','#ce1836','#009989']"
  [inputSize]="80"
></ng-boring-avatars-pixel-avatar>

<!-- Ring Avatar -->
<ng-boring-avatars-ring-avatar
  name="Mary Baker"
  [colors]="['#a3a948','#edb92e','#f85931','#ce1836','#009989']"
  [inputSize]="80"
></ng-boring-avatars-ring-avatar>

<!-- Sunset Avatar -->
<ng-boring-avatars-sunset-avatar
  name="Mary Baker"
  [colors]="['#a3a948','#edb92e','#f85931','#ce1836','#009989']"
  [inputSize]="80"
></ng-boring-avatars-sunset-avatar>
```
