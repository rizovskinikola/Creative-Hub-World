export class Category {
  alias: string;
  author: string;
  id: string;
  isPublished: boolean;
  title: string;
  color: string;

  constructor(params: any) {
    this.alias = params.attributes.alias;
    this.author = params.attributes.author_name;
    this.id = params.id;
    this.isPublished = !!parseInt(params.attributes.published);
    this.title = params.attributes.title;
    this.color = params.attributes.note;
  }
}
