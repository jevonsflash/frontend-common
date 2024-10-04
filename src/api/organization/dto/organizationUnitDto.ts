import { BaseAuditDto } from "./../../../api/base/baseAuditDto";

export class OrganizationUnitDto extends BaseAuditDto {
  parentId: number;
  code: string;
  displayName: string;
  memberCount: number;
  children: Array<OrganizationUnitDto>;

  /**
   *
   */
  constructor() {
    super();
    this.children = new Array<OrganizationUnitDto>();
  }
}



