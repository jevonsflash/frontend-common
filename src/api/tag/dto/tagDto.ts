import { BaseFullAuditDto } from "./../../../api/base/baseAuditDto";

export class TagDto extends BaseFullAuditDto {
  title: string;
  foreId: string;
  level: number;
  order: number;
  style: string;
}

export interface ITagOrientedDto {
  tags: Array<TagDto>;

}
