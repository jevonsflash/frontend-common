export class ButtonEnableDto {
    refresh?: boolean
    add?: boolean
    check?: boolean
    edit?: boolean
    delete?: boolean
    export?: boolean
    //新增，查询,修改，删除，导出
    constructor(refresh: boolean, add: boolean, check: boolean, edit: boolean, deletes: boolean, exporte: boolean) {
        this.refresh = refresh
        this.add = add
        this.check = check
        this.edit = edit
        this.delete = deletes
        this.export = exporte
    }
}