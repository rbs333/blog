export class Doc {
    title: string;
    content: string;
    id?: string;

    constructor(title, content, id) {
        this.title = title;
        this.content = content;
        this.id = id;
    }
}