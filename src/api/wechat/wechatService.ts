import { mkAjoxParams, mkAjoxData } from "./../../api/ajaxRequire"

export async function GetACode(data) {
    return await mkAjoxParams('Miniapp/GetACode', 'get', data)
}

export async function GetToken(data) {
    return await mkAjoxParams('Miniapp/GetToken', 'get', data)
}

export async function SetToken(data) {
    return await mkAjoxData('Miniapp/SetToken', 'post', data)
}

export async function Access(data) {
    return await mkAjoxData('Miniapp/Access', 'post', data)
}

export async function Authenticate(data) {
    return await mkAjoxData('Miniapp/Authenticate', 'post', data)
}
