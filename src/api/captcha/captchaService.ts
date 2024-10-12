import { mkAjoxParams, mkAjoxData } from "./../../api/ajaxRequire"

export async function Send(data: any) {
    var entity = await mkAjoxData('Captcha/Send', 'post', data)
    return entity
}

export async function Verify(data: any) {
    var entity = await mkAjoxData('Captcha/Verify', 'post', data)
    return entity
}


export async function Unbind(data: any) {
    var entity = await mkAjoxData('Captcha/Unbind', 'post', data)
    return entity
}

export async function Bind(data: any) {
    var entity = await mkAjoxData('Captcha/Bind', 'post', data)
    return entity
}