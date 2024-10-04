import { mkAjoxParams, mkAjoxData } from "./../../api/ajaxRequire"
import { LoginRequest, GetCurrentUserInfoResponseDto } from './../.././api/auth/dto/authDto'

export async function GetAll(data: any) {
    var entity = await mkAjoxParams('ArticleComment/GetAll', 'get', data)
    return entity
}

export async function Create(data) {
    return await mkAjoxData('ArticleComment/Create', 'post', data)
}

export async function Update(data) {
    return await mkAjoxData('ArticleComment/Update', 'PUT', data)
}


export async function Delete(data) {
    var entity = await mkAjoxParams('ArticleComment/Delete?id=' + data.id, 'delete', null)
    return entity
}

export async function Get(data) {
    var entity = await mkAjoxParams('ArticleComment/Get', 'get', data)
    return entity
} 