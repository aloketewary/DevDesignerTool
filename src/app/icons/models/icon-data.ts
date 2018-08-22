export class IconData {
    name: string;
    key: string;
    icons: Array<IconsProperty>;
}

export class IconsProperty {
    codepoint: string;
    group_id: string;
    id: string;
    ligature: string;
    name: string;
    keywords: Array<string>;
}

export class IconsList {
    name: string;
    desc: string;
    author: string;
    icon: string;
    for: string;
}
