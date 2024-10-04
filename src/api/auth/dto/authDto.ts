import { BaseResponse } from './../../../api/base/baseResponseDto'
import { BaseUserDto } from './userDto';
export class LoginRequest {
    userNameOrEmailAddress: string = ''
    password: string = ''
    rememberClient?: boolean = true
}

export class ExternalLoginRequest {
    authProvider: string
    providerKey: string
    providerAccessCode: string
}



export class GetCurrentUserInfoResponse extends BaseUserDto {
    permission: Array<string>;
    lastLoginTime: Date;
    creationTime: string;
}

export class GetCurrentUserInfoResponseDto extends BaseResponse<GetCurrentUserInfoResponse> {

}