import { BaseResponse } from './../../../api/base/baseResponseDto'

export class NotificationDto {
    items: Array<NotificationInfo>;
    totalCount: number;
    unreadCount: number;

    constructor() {
        this.items = [];
    }
}



/*Data*/
export class Data {
    message: string;
    type: string;
    properties: any;
}



/*Notification*/
export class Notification {
    tenantId: number;
    notificationName: string;
    data: Data;
    entityTypeName: string;
    entityId: string;
    severity: number;
    creationTime: string;
    id: string;
}


export class NotificationInfo {
    tenantId: number;
    userId: number;
    state: number;
    notification: Notification;
    id: string;
}




export class NotificationResponseDto extends BaseResponse<NotificationDto> {

}