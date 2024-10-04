import { BaseFullAuditDto } from "./../../../api/base/baseAuditDto";
import { DataEnumCategoryDto } from "./../../../api/system/dto/dataEnumsCategoryDto";


export class DataEnumsDto extends BaseFullAuditDto {
  dataEnumCategory: DataEnumCategoryDto;
  dataEnumCategoryId: number;
  name: string;
  value: string;
  code: string;
  isSys: boolean;
}



export class DataEnumsBriefDto extends BaseFullAuditDto {
  dataEnumCategoryTitle: string;
  dataEnumCategoryId: number;
  name: string;
  value: string;
  code: string;
  isSys: boolean;
}
