import { mkAjoxParams, mkAjoxData } from "./../../api/ajaxRequire"

export async function GetAuditLogs(data) {
    return await mkAjoxParams('AuditLog/GetAuditLogs', 'get', data)
}
