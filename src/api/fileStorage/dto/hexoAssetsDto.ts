export class CreateDto {
    isPushToRemote: boolean
    publishDate?: Date = undefined
    fileIds: Array<any> = []
}
