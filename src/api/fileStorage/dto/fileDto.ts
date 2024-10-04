import { BaseFullAuditDto } from "./../../../api/base/baseAuditDto"

export class FileBriefDto extends BaseFullAuditDto {
    parentId: string
    fileContainerName: string
    fileName: string
    mimeType: string
    fileType: number
    subFilesQuantity: number
    byteSize: number
    hash: string
    ownerUserId: number
}

export class FileBriefWithThumbnailDto extends FileBriefDto {
    thumbnail: any
}

export class CreateFileBaseDto {
    fileContainerName: string
    parentId?: string
    ownerUserId?: number
}

export class ActionCreateFileDto extends CreateFileBaseDto {
    fileType: number
    file: any
    generateUniqueFileName: boolean
}

export class ActionCreateManyFileDto extends CreateFileBaseDto {
    fileType: number
    files: Array<any>
    generateUniqueFileName: boolean
}
export class CreateFileDto extends CreateFileBaseDto {
    id: string
    fileName: string
    mimeType: string
    fileType: number
    file: any
}

export class CreateLocalDto extends CreateFileBaseDto {
    importDir: string
    generateUniqueFileName: boolean
    exclusionDirs: string
}





export class UpdateFileDto {
    id: string
    fileName: string
    file: any
}
