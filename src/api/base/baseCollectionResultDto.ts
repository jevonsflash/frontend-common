export class BaseCollectionResultDto<TResult> {
    totalCount: number;
    items: Array<TResult>;
}