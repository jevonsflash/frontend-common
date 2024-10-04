import { mkAjoxParams, mkAjoxData } from "./../../api/ajaxRequire"
import { LoginRequest, GetCurrentUserInfoResponseDto } from './../../api/auth/dto/authDto'

export async function GetAll(data: any) {
    var entity = await mkAjoxParams('ArticleCategory/GetAll', 'get', data)
    return entity
}

export async function GetAllWithoutPage(data) {
    var entity = await mkAjoxParams('ArticleCategory/GetAllWithoutPage', 'get', data)
    return entity
}

export async function Create(data) {
    return await mkAjoxData('ArticleCategory/Create', 'post', data)
}

export async function Update(data) {
    return await mkAjoxData('ArticleCategory/Update', 'PUT', data)
}


export async function Delete(data) {
    var entity = await mkAjoxParams('ArticleCategory/Delete?id=' + data.id, 'delete', null)
    return entity
}

export async function Get(data) {
    var entity = await mkAjoxParams('ArticleCategory/Get', 'get', data)
    return entity
}

export async function GetRootArticleCategory(data) {
    var entity = await mkAjoxParams('ArticleCategory/GetRootArticleCategory', 'get', data)
    return entity
} 