import { mkAjoxParams, mkAjoxData } from "./../../api/ajaxRequire"

export async function GetUserNotifications(data) {
    return await mkAjoxParams('Notification/GetUserNotifications', 'get', data)
}

export async function SendMessage(data) {
    return await mkAjoxData('Notification/SendMessage', 'post', data)
}

export async function PublishToUserOrUnit(data) {
    return await mkAjoxData('Notification/PublishToUserOrUnit', 'post', data)
}

export async function GetNotification(data) {
    return await mkAjoxParams('Notification/GetNotification', 'get', data)
}
export async function UpdateAllUserNotificationStates(data) {
    return await mkAjoxData('Notification/UpdateAllUserNotificationStates', 'post', data)
}


export async function UpdateUserNotificationState(data) {
    return await mkAjoxData('Notification/UpdateUserNotificationState', 'post', data)
}

export async function DeleteAllUserNotifications(data) {
    return await mkAjoxParams('Notification/DeleteAllUserNotifications', 'delete', null)
}
export async function DeleteUserNotification(data) {
    return await mkAjoxParams('Notification/DeleteUserNotification?id=' + data.id, 'delete', null)
}