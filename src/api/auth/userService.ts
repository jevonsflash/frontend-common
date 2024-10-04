import { mkAjoxParams, mkAjoxData } from "./../../api/ajaxRequire"

export async function GetAll(data) {
    return await mkAjoxParams('User/GetAll', 'get', data)
}

export async function Create(data) {
    return await mkAjoxData('User/Create', 'post', data)
}

export async function Update(data) {
    return await mkAjoxData('User/Update', 'PUT', data)
}

export async function Delete(data) {
    var entity = await mkAjoxParams('/User/Delete?id=' + data.id, 'delete', null)
    return entity
}


export async function Get(data) {
    var entity = await mkAjoxParams('User/Get', 'get', data)
    return entity
}

export async function ChangeLanguage(data) {
    var entity = await mkAjoxData('User/ChangeLanguage', 'post', data)
    return entity
}

export async function ChangePassword(data) {
    var entity = await mkAjoxData('User/ChangePassword', 'post', data)
    return entity
}


export async function ResetPassword(data) {
    var entity = await mkAjoxData('User/ResetPassword', 'post', data)
    return entity
} 