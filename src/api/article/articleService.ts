import { mkAjoxParams, mkAjoxData } from "./../../api/ajaxRequire"
import { LoginRequest, GetCurrentUserInfoResponseDto } from './../../api/auth/dto/authDto'

export async function GetAllBrief(data: any) {
    var entity = await mkAjoxParams('Article/GetAllBrief', 'get', data)
    return entity
}

export async function Create(data) {
    return await mkAjoxData('Article/Create', 'post', data)
}

export async function Update(data) {
    return await mkAjoxData('Article/Update', 'PUT', data)
}


export async function Delete(data) {
    var entity = await mkAjoxParams('Article/Delete?id=' + data.id, 'delete', null)
    return entity
}

export async function Get(data) {
    var entity = await mkAjoxParams('Article/Get', 'get', data)
    return entity
} 