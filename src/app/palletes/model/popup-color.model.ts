export class PopColorsModel {
  color: string;
  variations: Array<PopupColorVariation>;
  constructor() {
    this.variations = new Array<PopupColorVariation>(0);
  }
}

export class PopupColorVariation {
  isPrimary: boolean;
  weight: string;
  hex: string;
  label: string;
  constructor(_isPrimary?: boolean, _weight?: string, _hex?: string, _label?: string) {
    this.isPrimary = _isPrimary;
    this.weight = _weight;
    this.hex = _hex;
    this.label = _label;
  }
}
