export class GroupValue<T> implements IGroupValue {
    key: string;
    values: Array<T>
    properties: { [key: string]: string; }
    constructor(key: string, values: Array<T>, properties = {}) {
        this.key = key;
        this.values = values;
        this.properties = properties;
    }
}

export interface IGroupValue {
    key: string;
    values: Array<any>
    properties: { [key: string]: string; }
}