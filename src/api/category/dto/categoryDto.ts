import { BaseFullAuditDto } from "./../../../api/base/baseAuditDto";

export class CategoryDto extends BaseFullAuditDto {
    tenantId: number;
    title: string;
    description: string;
    level: number;
    order: number;
    style: string;
    parentId: number;
}
