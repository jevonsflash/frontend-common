export class BaseUserDto {
  id: number;
  userName: string;
  name: string;
  surname: string;
  emailAddress: string;
  isActive: boolean;
  fullName: string;
  roleNames: string[];
  type: string;
  salutation: string;
  sex: string;
  nationality: string;
  province: string;
  city: string;
  district: string;
  weChatNumber: string;
  identificationNumber: string;
  imageUrl: string;
  avatarUrl: string;
  birthDay: string;
  age: number;
  address: string;
  nativeAddress: string;
  education: string;
  politicsStatus: string;
  occupation: string;
  phoneNumber: string;
}

export class UserDto extends BaseUserDto {
  lastLoginTime: any;
  hasChatAccount?: boolean;
  creationTime: string;
}
