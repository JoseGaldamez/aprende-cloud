export interface IDataPost {
    id: string;
    title: string;
    author: string;
    description: string;
    category: string;
    date: string;
    image: string;
}

export class PostModel {
    title: string;
    id: string;
    author: string;
    description: string;
    category: string;
    date: string;
    image: string;

    constructor(data: IDataPost) {
        this.id = data.id;
        this.title = data.title;
        this.author = data.author;
        this.description = data.description;
        this.category = data.category;
        this.date = data.date;
        this.image = data.image;
    }
}
