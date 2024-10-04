import { mkAjoxParams, mkAjoxData } from "./../../api/ajaxRequire"

export async function GetRecurringJob(data) {
    return await mkAjoxData('Hangfire/GetRecurringJob', 'post', data)
}

export async function GetRecurringJobWithoutPage(data) {
    return await mkAjoxData('Hangfire/GetRecurringJobWithoutPage', 'post', data)
}
export async function GetJob(data) {
    return await mkAjoxData('Hangfire/GetJob', 'post', data)
}

export async function GetJobWithoutPage(data) {
    return await mkAjoxData('Hangfire/GetJobWithoutPage', 'post', data)
}

export async function Delete(data) {
    var entity = await mkAjoxParams('/Hangfire/Delete?jobId=' + data.id, 'delete', null)
    return entity
}


export async function DeleteRecurringJob(data) {
    var entity = await mkAjoxParams('/Hangfire/DeleteRecurringJob?jobId=' + data.id, 'delete', null)
    return entity
}