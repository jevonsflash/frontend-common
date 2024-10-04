export class CheckMessage {
    isActive?: Boolean
    keyword?: String
    skipCount?: Number = 0
    maxResultCount: Number = 50
    sorting?: String = "CreationTime"
}