export class Article {
  alias: string;
  author: string;
  isFeatured: boolean;
  id: string;
  introImageUrl: string;
  published: string;
  tags: string[];
  text: string;
  title: string;
  categoryId: string;
  isPublished: boolean;
  description: string;
  timeToRead: string;

  constructor(params: any) {
    this.alias = params.attributes.alias;
    this.author = params.attributes.created_by_alias;
    this.isFeatured = !!parseInt(params.attributes.featured)
    this.id = params.attributes.id;
    this.introImageUrl = params.attributes.images.image_intro;
    this.published = params.attributes.publish_up;
    this.tags = Object.values(params.attributes.tags);
    this.text = params.attributes.text;
    this.title = params.attributes.title;
    this.categoryId = params.relationships.category.data.id
    this.isPublished = params.attributes.state === '1';
    this.description = params.attributes.metadesc;
    this.timeToRead = params.attributes.metakey;
  }
}
