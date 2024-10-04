import { mkAjoxParams, mkAjoxData } from "./../../api/ajaxRequire"

export async function GetAllConfig(data) {
    return await mkAjoxParams('OrganizationUnit/GetAll', 'get', data)
}

export async function GetCurrentOrganizationUnit() {
    return await mkAjoxParams('OrganizationUnit/GetCurrentOrganizationUnit', 'get', null)
}

export async function DeleteOrganizationUnit(data) {
    return await mkAjoxParams('OrganizationUnit/DeleteOrganizationUnit?id=' + data.id, 'delete', null)
}

export async function GetAllForSelectAsync(data) {
    return await mkAjoxParams('OrganizationUnit/GetAllForSelectAsync', 'get', data)
}

export async function CreateOrganizationUnit(data) {
    return await mkAjoxData('OrganizationUnit/CreateOrganizationUnit', 'post', data)
}

export async function UpdateOrganizationUnit(data) {
    return await mkAjoxData('OrganizationUnit/UpdateOrganizationUnit', 'put', data)
}

export async function GetOrganizationUnitUsers(data) {
    return await mkAjoxData('OrganizationUnit/GetOrganizationUnitUsers', 'post', data)
}

export async function AddUserToOrganizationUnit(data) {
    return await mkAjoxData('OrganizationUnit/AddUserToOrganizationUnit', 'post', data)
}

export async function RemoveUserFromOrganizationUnit(data) {
    var entity = await mkAjoxParams('OrganizationUnit/RemoveUserFromOrganizationUnit', 'delete', data)
    return entity
}

export async function GetRootOrganizationUnit(data) {
    var entity = await mkAjoxParams('OrganizationUnit/GetRootOrganizationUnit', 'get', data)
    return entity
}

export async function GetUserRootOrganizationUnit(data) {
    var entity = await mkAjoxParams('OrganizationUnit/GetUserRootOrganizationUnit', 'get', data)
    return entity
}

export async function FindUsersWithoutOrganization(data) {
    var entity = await mkAjoxData('OrganizationUnit/FindUsersWithoutOrganization', 'post', data)
    return entity
}
export async function IsOrganizationUsed(data) {
    var entity = await mkAjoxData('OrganizationUnit/IsOrganizationUsed', 'post', data)
    return entity
}
export async function GetOrganizationUnitByUser(data) {
    return await mkAjoxParams('OrganizationUnit/GetOrganizationUnitByUser', 'get', data)
}