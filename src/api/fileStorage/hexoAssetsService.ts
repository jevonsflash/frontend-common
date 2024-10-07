import { mkAjoxParams, mkAjoxData } from "./../../api/ajaxRequire"



export async function CreateNow(data) {
    return await mkAjoxData('File/CreateNow', 'post', data)
}

export async function Create(data) {
    return await mkAjoxData('File/Create', 'post', data)
}
