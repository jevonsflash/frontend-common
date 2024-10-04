import { BaseUserDto } from "./userDto"

export class CreateUserDto extends BaseUserDto {
    password: string
    constructor() {
        super();
        this.roleNames = [];
        this.isActive = true;
        this.nationality = "汉族";
        this.education = "小学";
        this.politicsStatus = "群众";
        this.occupation = "无业";
        this.address = "XX路(街道)XX号";
        this.nativeAddress = "XX路(街道)XX号";
        this.surname = "";
        this.name = "";
        this.birthDay = "1980-01-01"
        this.sex = "male"
        this.salutation = "先生"

    }
}