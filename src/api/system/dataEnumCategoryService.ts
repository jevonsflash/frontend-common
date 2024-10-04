import { mkAjoxParams, mkAjoxData } from "./../../api/ajaxRequire"
import { LoginRequest, GetCurrentUserInfoResponseDto } from './../../api/auth/dto/authDto'

export async function GetAll(data: any) {
    var entity = await mkAjoxParams('DataEnumCategory/GetAll', 'get', data)
    return entity
}

export async function GetAllWithoutPage(data) {
    var entity = await mkAjoxParams('DataEnumCategory/GetAllWithoutPage', 'get', data)
    return entity
}

export async function Create(data) {
    return await mkAjoxData('DataEnumCategory/Create', 'post', data)
}

export async function Update(data) {
    return await mkAjoxData('DataEnumCategory/Update', 'PUT', data)
}


export async function Delete(data) {
    var entity = await mkAjoxParams('DataEnumCategory/Delete?id=' + data.id, 'delete', null)
    return entity
}

export async function Get(data) {
    var entity = await mkAjoxParams('DataEnumCategory/Get', 'get', data)
    return entity
}

export async function GetRootDataEnumCategory(data) {
    var entity = await mkAjoxParams('DataEnumCategory/GetRootDataEnumCategory', 'get', data)
    return entity
} 