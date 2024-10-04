export class RoleDto {
    id: number
    name: string 
    displayName?: string = undefined
    normalizedName?: string = undefined
    description?: string = undefined
    grantedPermissions: Array<string> = []

}