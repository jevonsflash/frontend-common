import request from '../../src/utils/request'

import { CancelTokenSource } from 'axios'
export async function mkAjoxData(url: string, methods, data: any, prefix?: string, onProgress?: Function, cancelToken?: CancelTokenSource) {
    if (prefix != null && prefix != undefined && prefix != '') {
        if (prefix.endsWith('/') && url.startsWith('/')) {
            url = url.substring(1, url.length)
        }
        url = prefix + url


    } else {
        if (url.startsWith('/')) {
            url = url.substring(1, url.length)
        }
        url = '/api/services/app/' + url

    }

    var token = null
    var timeout = 30000;
    if (cancelToken) {
        token = cancelToken.token
        timeout = 0;
    }

    var re = await request({
        url: url,
        method: methods,
        data: data,
        cancelToken: token,
        timeout: timeout,
        onUploadProgress: function (progressEvent) { //原生获取上传进度的事件
            if (progressEvent.lengthComputable) {
                if (onProgress) {
                    onProgress(progressEvent);
                }
            }
        },
    })
    return re as any;

}

export async function mkAjoxParams(url: string, methods, data: any, prefix?: string) {
    if (prefix != null && prefix != undefined && prefix != '') {
        if (prefix.endsWith('/') && url.startsWith('/')) {
            url = url.substring(1, url.length)
        }
        url = prefix + url

    } else {
        if (url.startsWith('/')) {
            url = url.substring(1, url.length)
        }
        url = '/api/services/app/' + url

    }
    var re = await request({
        url: url,
        method: methods,
        params: data,
    })
    return re as any;
}