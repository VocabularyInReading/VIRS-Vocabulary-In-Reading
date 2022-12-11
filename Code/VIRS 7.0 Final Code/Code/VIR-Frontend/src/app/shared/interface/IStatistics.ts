import { IWordPercentage } from './IWordPercentage';
import { IWordCount } from './IWordCount';

export interface IStatistics {
    wordCount: IWordCount;
    wordPercentage: IWordPercentage;
}
