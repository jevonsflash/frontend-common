import { BaseResponse } from './../../../api/base/baseResponseDto'
import { BaseUserDto } from './userDto';
export class LoginRequest {
    userNameOrEmailAddress: string = ''
    password: string = ''
    rememberClient?: boolean = true
    twoFactorAuthenticationToken?: string = ""
    twoFactorAuthenticationProvider?: string = ""
    rememberClientToken?: string = ""
}

export class ExternalLoginRequest {
    authProvider: string
    providerKey: string
    providerAccessCode: string
    avatar: string
    phoneNumber: string
}



export class GetCurrentUserInfoResponse extends BaseUserDto {
    permission: Array<string>;
    lastLoginTime: Date;
    creationTime: string;
}

export class GetCurrentUserInfoResponseDto extends BaseResponse<GetCurrentUserInfoResponse> {

}