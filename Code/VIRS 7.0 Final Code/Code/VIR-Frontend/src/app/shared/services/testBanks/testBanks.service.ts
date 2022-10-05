import { Injectable } from '@angular/core';
import { BeginnerTestBank } from '../testBanks/beginnerTestBank.service';
import { IntermediateTestBank } from '../testBanks/intermediateTestBank.service';
import { UpperTestBank } from '../testBanks/upperTestBank.service';
import { AdvancedTestBank } from '../testBanks/advancedTestBank.service';
import { VocabATestBank } from '../testBanks/vocab-a.service';
import { VocabBTestBank } from '../testBanks/vocab-b.service';

/**
 * This class acts as a single access point for all other test banks
 * The class BeginnerComponent in /layout/tests/beginner is the one that uses this class.
 * Depending on the 'level' it will return the question/an
 */

@Injectable()
export class TestBanks {

    //Constants-----------------------------------------------------------------------
    private BEGINNER: string = "Beginner";
    private INTER: string = "Intermediate";
    private UPPER: string = "Upper Intermediate";
    private ADVANCED: string = "Advanced";
    private VOCAB1: string = "Vocabulary Size (A)";
    private VOCAB2: string = "Vocabulary Size (B)";
    private DEPTH: string = "D";


    //This for when the testbanks are being modified.. something to pass on to the html
    private NOTE: string = "THIS SECTION IS NOT DONE YET!! COME BACK SOON...";
    //----------------------------------------------------------------------------------

    answer: string;                                     //This is where the answer for the selected question is stored for access
    question: string;                                   //This is where the actual question is stored for access
    options: string[];                                  //This is there the array of options is stored for access

    totalQuestions: number;                             //This is where the number of total questions in a specific test bank is stored.

    /**
     * Gets the question in position 'id' from the test bank named 'level'
     * @param id is the number to get from the list of questions.
     * @param level is the level from where tp pull from.
     */
    getQuestion(id:number , level:string) {

        if (level == "beginner" || level == this.BEGINNER) {

            BeginnerTestBank.questionsLib(id);

            this.question = BeginnerTestBank.question;
            this.answer = BeginnerTestBank.answer;
            this.options = BeginnerTestBank.options;

            this.totalQuestions = BeginnerTestBank.totalQuestions;
        }//Pulls the quetions from the Beginner test bank

        if (level == "intermediate" || level == this.INTER) {

            IntermediateTestBank.questionsLib(id);

            this.question = IntermediateTestBank.question;
            this.answer = IntermediateTestBank.answer;
            this.options = IntermediateTestBank.options;

            this.totalQuestions = IntermediateTestBank.totalQuestions;
        }//Pulls the questions from the Intermediate test bank

        if (level == "upper" || level == this.UPPER) {

            UpperTestBank.questionsLib(id);

            this.question = UpperTestBank.question;
            this.answer = UpperTestBank.answer;
            this.options = UpperTestBank.options;

            this.totalQuestions = UpperTestBank.totalQuestions;

        }//Pulls the questions from the Upper Intermediate test bank

        if (level == "advanced" || level == this.ADVANCED) {

            AdvancedTestBank.questionsLib(id);

            this.question = AdvancedTestBank.question;
            this.answer = AdvancedTestBank.answer;
            this.options = AdvancedTestBank.options;

            this.totalQuestions = AdvancedTestBank.totalQuestions;

        }//Pulls the questions from the Advanced test bank

        if (level == "vocabA" || level == this.VOCAB1) {

            VocabATestBank.questionsLib(id);

            this.question = VocabATestBank.question;
            this.answer = VocabATestBank.answer;
            this.options = VocabATestBank.options;

            this.totalQuestions = VocabATestBank.totalQuestions;

        }//Pulls the questions from the VocabATestBank test bank

        if (level == "vocabB" || level == this.VOCAB1) {
            VocabBTestBank.questionsLib(id);

            this.question = VocabBTestBank.question;
            this.answer = VocabBTestBank.answer;
            this.options = VocabBTestBank.options;

            this.totalQuestions = VocabBTestBank.totalQuestions;


        }//Pulls the questions from the VocabBTestBank test bank

        if (level == "depth" || level == this.DEPTH) {

            //AdvancedTestBank.questionsLib(id);

            //this.question = AdvancedTestBank.question;
            //this.answer = AdvancedTestBank.answer;
            //this.options = AdvancedTestBank.options;

            //this.totalQuestions = AdvancedTestBank.totalQuestions;

            this.answer = this.NOTE;
            this.question = this.NOTE;
            this.options = [this.NOTE, this.NOTE, this.NOTE, this.NOTE];
            this.totalQuestions = 0;
        }//Pulls the questions from the Intermediate test bank

    }


}
