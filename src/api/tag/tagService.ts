import { mkAjoxParams, mkAjoxData } from "./../../api/ajaxRequire"

export async function GetAll(data) {
    return await mkAjoxParams('Tag/GetAll', 'get', data)
}

export async function GetAllWithoutPage(data) {
    return await mkAjoxParams('Tag/GetAllWithoutPage', 'get', data)
}

export async function Create(data) {
    return await mkAjoxData('Tag/Create', 'post', data)
}

export async function Update(data) {
    return await mkAjoxData('Tag/Update', 'PUT', data)
}


export async function Delete(data) {
    var entity = await mkAjoxParams('/Tag/Delete?id=' + data.id, 'delete', null)
    return entity
}

export async function Get(data) {
    var entity = await mkAjoxParams('Tag/Get', 'get', data)
    return entity
} 