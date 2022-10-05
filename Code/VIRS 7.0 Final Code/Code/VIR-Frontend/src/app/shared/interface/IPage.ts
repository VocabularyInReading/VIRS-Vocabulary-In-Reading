import { IWord, IOrder } from './';

export interface IPage {
    content: IWord[],
    first: boolean,
    last: boolean,
    number: number,
    numberOfElements: number,
    size: number,
    sort: IOrder[],
    totalElements: number,
    totalPages: number
}
