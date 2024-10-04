import { mkAjoxParams, mkAjoxData } from "./../../api/ajaxRequire"


export async function Get(data) {
    return await mkAjoxParams('File/Get', 'get', data)
}


export async function CreateAndGetDownloadInfo(data) {
    return await mkAjoxData('File/CreateAndGetDownloadInfo', 'post', data)
}

export async function Create(data) {
    return await mkAjoxData('File/Create', 'post', data)
}

export async function CreateLocal(data) {
    return await mkAjoxData('File/CreateLocal', 'post', data)
}


export async function CreateWithStream(data) {
    return await mkAjoxData('File/CreateWithStream', 'post', data)
}

export async function Delete(data) {
    return await mkAjoxParams('File/Delete', 'delete', data)
}

export async function Restore(data) {
    return await mkAjoxData('File/Restore', 'post', data)
}

export async function Trash(data) {
    return await mkAjoxParams('File/Trash', 'delete', data)
}

export async function CreateManyWithStream(data) {
    return await mkAjoxData('File/CreateManyWithStream', 'post', data)
}


export async function Move(data) {
    return await mkAjoxData('File/Move', 'post', data)
}

export async function Copy(data) {
    return await mkAjoxData('File/Copy', 'post', data)
}


export async function GetDownloadInfo(data) {
    return await mkAjoxParams('File/GetDownloadInfo', 'get', data)
}


export async function Update(data) {
    return await mkAjoxData('File/Update', 'put', data)
}


export async function UpdateWithStream(data) {
    return await mkAjoxData('File/UpdateWithStream', 'put', data)
}

export async function UpdateInfo(data) {
    return await mkAjoxData('File/UpdateInfo', 'put', data)
}


export async function GetAll(data) {
    return await mkAjoxParams('File/GetAll', 'get', data)
}

export async function GetAllWithThumbnail(data) {
    return await mkAjoxParams('File/GetAllWithThumbnail', 'get', data)
}

export async function ActionCreate(data, onProgress, cancelToken) {
    return await mkAjoxData('File/ActionCreate', 'post', data, null, onProgress, cancelToken)
}

export async function ActionCreateMany(data) {
    return await mkAjoxData('File/ActionCreateMany', 'post', data)
}


export async function ActionUpdate(data, onProgress, cancelToken) {
    return await mkAjoxData('File/ActionUpdate', 'put', data, null, onProgress, cancelToken)
}
export async function ActionDownload(data) {
    return await mkAjoxParams('File/ActionDownload', 'get', data)
}
