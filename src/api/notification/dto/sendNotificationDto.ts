import { IScheduledDto } from "./../../../api/base/iScheduledDto";

export class CacheFiles {
    id: string;
    name: string;
}


export class SendNotificationDto implements IScheduledDto {
    organizationUnitIds: number[];
    userIds: number[];
    notificationName: string;
    message: string;
    cacheFiles: CacheFiles[];
    cacheFileId: string;
    fileName: string;
    cron: string;
    delay: string;
    type: string;
    title: string;
    entityId: number;
    severity: string;
    constructor() {
        this.delay = "00:00:00";
        this.type = "text";
        this.title = "文本通知";
    }
}

