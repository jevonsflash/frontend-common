export class BaseAuditDto implements IBaseDto {
    id: number;
    creationTime: string;
    creatorUserId: number;
    lastModificationTime: string;
    lastModifierUserId: number;

}


export class BaseFullAuditDto extends BaseAuditDto implements IBaseDto {
    isDeleted: boolean;
    deleterUserId: number;
    deletionTime: string;
}

export interface IBaseDto {
    id: number;
}