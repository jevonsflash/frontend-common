import { mkAjoxParams, mkAjoxData } from "./../../api/ajaxRequire"
import { LoginRequest, GetCurrentUserInfoResponseDto } from './../../api/auth/dto/authDto'

export async function GetAllBrief(data: any) {
    var entity = await mkAjoxParams('DataEnums/GetAllBrief', 'get', data)
    return entity
}

export async function GetAllBriefWithoutPage(data: any) {
    var entity = await mkAjoxParams('DataEnums/GetAllBriefWithoutPage', 'get', data)
    return entity
}

export async function Create(data) {
    return await mkAjoxData('DataEnums/Create', 'post', data)
}

export async function Update(data) {
    return await mkAjoxData('DataEnums/Update', 'PUT', data)
}


export async function Delete(data) {
    var entity = await mkAjoxParams('DataEnums/Delete?id=' + data.id, 'delete', null)
    return entity
}

export async function Get(data) {
    var entity = await mkAjoxParams('DataEnums/Get', 'get', data)
    return entity
} 