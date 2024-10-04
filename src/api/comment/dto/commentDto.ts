import { BaseFullAuditDto } from "./../../../api/base/baseAuditDto";

/*ArticleComments*/



export class CommentDto extends BaseFullAuditDto {
    title: string;
    content: string;
    rate: number;
    foreId: number;
    commentProperties: string;
    constructor() {
        super()
        this.title = null
        this.commentProperties = null
        this.content = null
    }
}
