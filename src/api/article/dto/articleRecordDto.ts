import { ArticleDto } from "./articleDto";

/*ArticleRecords*/
export class ArticleRecordDto {
    id: number;
    num: number;
    type: string;
    articleId: number;
    article: ArticleDto;
  }