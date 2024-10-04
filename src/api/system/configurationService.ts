import { mkAjoxParams, mkAjoxData } from "./../../api/ajaxRequire"

export async function GetAllConfig(data) {
    return await mkAjoxParams('Configuration/GetAllConfig', 'get', data)
}

export async function GetPasswordConfig(data) {
    return await mkAjoxParams('Configuration/GetPasswordConfig', 'get', data)
}

export async function ChangePasswordConfig(data) {
    return await mkAjoxData('Configuration/ChangePasswordConfig', 'post', data)
}


export async function ChangeFTPConfig(data) {
    var entity = await mkAjoxData('Configuration/ChangeFTPConfig', 'post', data)
    return entity
} 