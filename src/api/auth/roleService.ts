import { mkAjoxParams, mkAjoxData } from "./../../api/ajaxRequire"
import { CheckMessage } from './../.././api/base/componentDto/CheckMessage'


export async function GetAll(data: CheckMessage) {
    var entity = await mkAjoxParams('/Role/GetAll', 'get', data)
    return entity
}

export async function Create(data: any) {
    var entity = await mkAjoxData('/Role/Create', 'post', data)
    return entity
}

export async function Update(data: any) {
    var entity = await mkAjoxData('/Role/Update', 'put', data)
    return entity
}

export async function Delete(data: any) {
    var entity = await mkAjoxParams('/Role/Delete?id=' + data.id, 'delete', null)
    return entity
}


export async function GetAllPermissions() {
    var entity = await mkAjoxParams('/Role/GetAllPermissions', 'get', null)
    return entity
}


export async function GetAllPermissionsForElCascader() {
    var entity = await mkAjoxParams('/Role/GetAllPermissionsForElCascader', 'get', null)
    return entity
}
