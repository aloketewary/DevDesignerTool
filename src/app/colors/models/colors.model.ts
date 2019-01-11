export class ColorsModel {
  color: string;
  variation: Array<ColorVariation>;
  constructor() {
    this.variation = new Array<ColorVariation>(0);
  }
}

export class ColorVariation {
  color: string;
  isPrimary: boolean;
  weight: string;
  hex: string;
  label: string;
  constructor(_color?: string, _isPrimary?: boolean, _weight?: string, _hex?: string, _label?: string) {
    this.color = _color;
    this.isPrimary = _isPrimary;
    this.weight = _weight;
    this.hex = _hex;
    this.label = _label;
  }
}
