
console.info("importing frontend-common module!!!!!")
import request from "./src/utils/request"
// import request_uniapp from "./src/utils/request_uniapp"
import { IFrontendCommonConfig } from "./src/config";
import config from "./src/config";
import axios from "axios";
export function setConfig(params: IFrontendCommonConfig) {
    Object.assign(config, params);
    request.defaults.baseURL = config.baseURL
}

export const getCancelToken = function () {
    var source = axios.CancelToken.source();
    return source;
}