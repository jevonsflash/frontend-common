import { BaseFullAuditDto } from "./../../../api/base/baseAuditDto";
import { ITagOrientedDto, TagDto } from "./../../../api/tag/dto/tagDto";
import { ArticleCategoryDto } from "./articleCategoryDto";
import { CommentDto } from "../../comment/dto/commentDto";
import { ArticleRecordDto } from "./articleRecordDto";


export class ArticleBaseDto extends BaseFullAuditDto {
    tenantId: number;
    articleCategoryId: number;
    articleCategory: ArticleCategoryDto;
    title: string;
    subTitle: string;
    status: string;
    order: number;
    isCommentEnable: boolean;
    extendedValue: string;
    imageUrl: string;
    fileUrl: string;
    articleRecords: ArticleRecordDto[];

}

/*Article*/
export class ArticleDto extends ArticleBaseDto implements ITagOrientedDto {
    tags: TagDto[];
    content: string;
    constructor() {
        super();
        this.title = '';
        this.subTitle = '';
        this.content = '';
        this.tags = new Array<TagDto>();
    }
}


export class ArticleBriefDto extends ArticleBaseDto {
    articleCategoryTitle: string;
    articleTagsTitle: string[];
    contentBrief: string;
    constructor() {
        super();
        this.title = '';
        this.subTitle = '';
    }
}




