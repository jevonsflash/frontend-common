import { mkAjoxParams, mkAjoxData } from "./../../api/ajaxRequire"
import { LoginRequest, GetCurrentUserInfoResponseDto, ExternalLoginRequest } from './../.././api/auth/dto/authDto'

export async function Login(data: LoginRequest) {
    var entity = await mkAjoxData('/Authenticate', 'post', data, '/api/TokenAuth')
    return entity
}

export async function ExternalLogin(data: ExternalLoginRequest) {
    var entity = await mkAjoxData('/ExternalAuthenticate', 'post', data, '/api/TokenAuth')
    return entity
}

export async function Logout() {
    return null
}


export async function SingleLogin(data: any) {
    var entity = await mkAjoxData('/SingleAuthenticate', 'post', data, '/api/TokenAuth')
    return entity
}
export async function GetUserInfo(data: any) {
    var entity = await mkAjoxParams('/User/Get', 'get', data)
    return entity
}


export async function GetCurrentUserInfo(): Promise<GetCurrentUserInfoResponseDto> {
    var entity = await mkAjoxParams('/User/GetCurrentUserInfo', 'get', null)
    return entity
}
