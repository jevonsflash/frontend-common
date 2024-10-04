import { CategoryDto } from "./../../../api/category/dto/categoryDto";
import { DataEnumsBriefDto } from "./../../../api/system/dto/dataEnumsDto";



export class DataEnumCategoryDto extends CategoryDto {
    dataEnums: DataEnumsBriefDto[];
    treeType: string;
    displayName: string;
    children: Array<DataEnumCategoryDto>
}
