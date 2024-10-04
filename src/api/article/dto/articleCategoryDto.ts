import { CategoryDto } from "./../../../api/category/dto/categoryDto";
import { ArticleBriefDto } from "./articleDto";

/*ArticleCategory*/

export class ArticleCategoryDto extends CategoryDto {
    articles: ArticleBriefDto[];
    treeType: string;
    displayName: string;
    children: Array<ArticleCategoryDto>

}
