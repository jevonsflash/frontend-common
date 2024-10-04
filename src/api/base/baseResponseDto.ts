 
 /*Error*/
export class Error {
    code: number;
    message: string;
    details?: string;
    validationErrors?: any;
}

/*tsModel4*/
export class BaseResponse<TResult> {
  result?: TResult;
  targetUrl?: string;
  success: boolean;
  error?: Error;
  unAuthorizedRequest: boolean;
  code: number;
}