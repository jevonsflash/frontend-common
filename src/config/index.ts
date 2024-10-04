export interface IFrontendCommonConfig {
    unAuthorizationHandler?: Function
    showErrorHandler?: Function
    baseURL: string
    UserModule: any

}

const FrontendCommonConfig: IFrontendCommonConfig = {
    baseURL: "",
    UserModule: null
};
export default FrontendCommonConfig