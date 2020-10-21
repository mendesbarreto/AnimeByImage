export default class AnimeInfo {
  public title: string;

  public imageURL: string;

  public description: string;

  constructor(title: string, imageURL: string, description: string) {
    this.title = title;
    this.imageURL = imageURL;
    this.description = description;
  }
}
