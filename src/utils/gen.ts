export function getClientNumber(affix: string) {
    var date = new Date();
    var clientNumber = `1${date.getFullYear().toString().substring(2)}${(date.getMonth() + 1).toString().padStart(2, '0')}${affix}${(Math.random() * 100000).toFixed(0).toString().padEnd(5, '0')}`;
    return clientNumber
}


export function getEmployeeNumber(affix: string) {
    var date = new Date();
    var employeeNumber = `2${date.getFullYear().toString().substring(2)}${(date.getMonth() + 1).toString().padStart(2, '0')}${affix}${(Math.random() * 100000).toFixed(0).toString().padEnd(5, '0')}`;
    return employeeNumber

}

export function getWechatMiniappLoginToken() {
    var date = new Date();
    var employeeNumber = `${(Math.random() * 100000000).toFixed(0).toString().padEnd(8, '0')}`;
    return employeeNumber

}



