export class FontsData {
    kind: string;
    family: string;
    category: string;
    variants: Array<string>;
    subsets: Array<string>;
    version: string;
    lastModified: Date;
    files: FontObject;
}
export class FontObject {
    '200': string;
    '200italic': string;
    '300': string;
    '300italic': string;
    'regular': string;
    'italic': string;
    '600': string;
    '600italic': string;
    '700': string;
    '700italic': string;
    '800': string;
    '800italic': string;
    '900': string;
    '900italic': string;
}
class FontsVariants {
    type: Array<FontsWeight>;
}

class FontsWeight {
    weight: Array<WeightData>;
}

class WeightData {
    local: Array<string>;
    url: Array<string>;
}
