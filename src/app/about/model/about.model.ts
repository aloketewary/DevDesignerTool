export class AboutModel {
    logDate: Date;
    header: HeaderText;
    description: string;
    constructor() {
        this.header = new HeaderText();
    }
}

class HeaderText {
    firstText: string;
    secondText: string;
}
