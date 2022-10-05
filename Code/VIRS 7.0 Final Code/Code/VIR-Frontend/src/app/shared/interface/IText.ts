import { IStatistics } from './IStatistics';
import { IWordMatch } from './IWordMatch';

export interface IText {
  fleschReadingScore: number;
  sentenceCount: number;
  statistics: IStatistics;
  words: IWordMatch[];
}
