import { mkAjoxParams, mkAjoxData } from "./../../api/ajaxRequire"



export async function CreateNow(data) {
    return await mkAjoxData('HexoAssetsService/CreateNow', 'post', data)
}

export async function Create(data) {
    return await mkAjoxData('HexoAssetsService/Create', 'post', data)
}
