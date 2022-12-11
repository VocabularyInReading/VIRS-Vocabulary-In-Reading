import { Injectable } from '@angular/core';


export class AdvancedTestBank {

    public static answer: string;
    public static question: string;
    public static options: string[];

    public static totalQuestions: number;


    public static questionsLib(id: number) {

        var questions = [
            {
                question: "What is the register of the word 'specs' in: 'I can't find my specs, have you seen them?",
                answer: "1",
                options: ["Formal", "Informal", "Outdated", "Literary"]
            },

            {
                question: "Which word does not take the prefix 'over'?",
                answer: "2",
                options: ["Hand", "Estimate", "Night", "Priced"]
            },

            {
                question: "Choose the odd one out from this list of words connected with work",
                answer: "1",
                options: ["Vocational", "Flextime", "Mechanical", "Manual"]
            },

            {
                question: "Complete the definition: ______ is when you always buy a particular make of a product because you trust the quality",
                answer: "3",
                options: ["Red Tape", "Hard Sell", "Capital Assets", "Brand Loyalty"]
            },

            {
                question: "Which of these words is not a piece of writing?",
                answer: "2",
                options: ["Composition", "Draft", "Plagiarism", "Dissertation"]
            },

            {
                question: "Which word is a negative characteristic",
                answer: "0",
                options: ["Extravagant", "Elegant", "Affectionate", "Generous"]
            },

            {
                question: "Complete the sentence: John and I fell head ______ in love",
                answer: "0",
                options: ["Over heals", "It off", "At first sight", "Over shoulder"]
            },

            {
                question: "Which verb does not mean 'have a strong desire for something'?",
                answer: "2",
                options: ["Crave", "Hanker after", "Defuse", "Yearn for"]
            },

            {
                question: "Complete the sentence with the correct adjective: Becky is so ____." +
                "If she sees something she likes, she buys it without thinkning",
                answer: "1",
                options: ["Extrovert", "Impulsive", "Garrulous", "Effusive"]
            },

            {
                question: "Which word means 'Someone who is not active physically'",
                answer: "2",
                options: ["A dabbler", "A culture vulture", "A couch potato", "A doer"]
            },

            {
                question: "Complete the sentence: At our office we have a ____ day once a month when we can wear casual clothes.",
                answer: "1",
                options: ["Designer", "Dress down", "Snazzy", "Dress to kill"]
            },

            {
                question: "What does this sentence mean? 'The film was panned by the critics'",
                answer: "1",
                options: ["The critics loved the film", "The critics thought the film was very bad", "The critics praised the film", "The critics made the film"]
            },

            {
                question: "Which expression about reading a book means 'I didn't like it'?",
                answer: "2",
                options: ["It was a page-turner", "I couldn't put it down", "I couldn't get into it", "It's compulsive reading"]
            },

            {
                question: "If someone says 'Lunch is on me' they meaan what?",
                answer: "0",
                options: ["They will pay for lunch", "They will cook lunch", "They already made lunch", "Lets eat lunch at my house"]
            },

            {
                question: "Which of these is not connected with a car accident?",
                answer: "0",
                options: ["Road-rage", "Hit-and-run", "Pile-up", "Head-on collision"]
            },

            {
                question: "What are all these words connected with?: Guided tour, self-catering, an all-in package, trekking",
                answer: "2",
                options: ["Hotels", "Methods of transport", "Types of holidays", "Catering"]
            },

            {
                question: "Complete the sentence: The current economic ____ is very good for small businesses",
                answer: "1",
                options: ["Disposition", "Climate", "Haze", "Whirlwind"]
            },

            {
                question: "Which word does KEY not collocate with?",
                answer: "3",
                options: ["Question", "Decision", "Role", "Thought"]
            },

            {
                question: "A tamed animal ____.",
                answer: "1",
                options: ["Behaves aggresively", "Does not fear humans", "Is a pet", "Lives with other humans"]
            },

            {
                question: "Which of these expressions about the environment is connected with animals?",
                answer: "3",
                options: ["Deforestation", "Greenhouse effect", "Global warming", "Endangered species"]
            },

            {
                question: "Which of these idioms means 'I don't believe you'?",
                answer: "1",
                options: ["I'll give you the benefit of the doubt", "What do you take me for?", "You should take it with a pinch of salt", "Believe me in"]
            },

            {
                question: "Complete the sentence: An area represented by an MP is called a ____.",
                answer: "2",
                options: ["Lobby", "Deputation", "Constituency", "Legislation"]
            },

            {
                question: "Complete the sentence: If you suffer from ____ you are ill because you are not eating enough food.",
                answer: "1",
                options: ["Illiteracy", "Malnutrition", "Poverty", "Sanitation"]
            },

            {
                question: "Which of these crimes is a type of stealing?",
                answer: "2",
                options: ["Perjury", "Harassment", "Embezzelemt", "Joyriding"]
            },

            {
                question: "Complete the sentence: Both sodes agreed to an immediate ____ and the fighting has stopped.",
                answer: "1",
                options: ["Annihilation", "Ceasefire", "Deterrent", "Warfare"]
            },

            {
                question: "Which of these expressions means you have a lot of money?",
                answer: "0",
                options: ["Rolling in it", "Skin", "Strapped for cash", "Things are a bit tight"]
            },

            {
                question: "Which of thee words does not exist?",
                answer: "3",
                options: ["Upload", "Offline", "Inbox", "Undelete"]
            },

            {
                question: "Which of these idioms about illness is the odd one out?",
                answer: "3",
                options: ["Out of sorts", "Off-color", "Under the weather", "On the mend 55"]
            },

            {
                question: "'A level playing field' means what?",
                answer: "3",
                options: ["A change in the rules", "A serious discussion", "An election", "A fair situation"]
            },

            {
                question: "Complete the sentence: Which ____ should I click on to write a new email?",
                answer: "0",
                options: ["Icon", "Thumbnail", "Footprint", "Analogue"]
            },

            {
                question: "Which adjective describes experiencing something using your computer instead in real life?",
                answer: "1",
                options: ["Interactive", "Virtual", "Smart", "Genetic"]
            },

            {
                question: "Which of word do all of the following adjectives collocate with? Persistent, fleeting, lingering, protracted",
                answer: "3",
                options: ["Sit", "Moment", "Glimpse", "Smile"]
            },

            {
                question: "Which verb describes the way someone walks when their feet hurt?",
                answer: "0",
                options: ["Hobble", "Amble", "Tiptoe", "Trudge"]
            },

            {
                question: "What can you do with you eyebrows?",
                answer: "3",
                options: ["Twitch", "Flutter", "Open", "Raise"]
            },

            {
                question: "Which of these is not a shade of red?",
                answer: "3",
                options: ["Poppy", "Ruby", "Strawberry", "Violet"]
            },

            {
                question: "What do all these verb mean? Nip, pop, zip, whizz",
                answer: "0",
                options: ["To go a short distance quickly", "To run a short distance", "To walk very quickly", "None of the above"]
            },

            {
                question: "Which of these words means a very hard or painful experienc?",
                answer: "2",
                options: ["Glitch", "Pitfall", "Ordeal", "Setback"]
            },

            {
                question: "Complete the sentence: The school will not ____ any form of cheating in exams.",
                answer: "0",
                options: ["Condone", "Endorse", "Authorize", "Give the green light"]
            },

            {
                question: "Complete the sentence: Mr. Williams showed no ____ as the judge sentenced him to ten years in prision.",
                answer: "1",
                options: ["Apology", "Remorse", "Excuse", "Alibi"]
            },

            {
                question: "Which of these means 'an agreement'?",
                answer: "3",
                options: ["A gift", "Coincidence", "Rift", "Settlement"]
            },

            {
                question: "Replace 'goes against' without changing the meaning in the following sentence: " +
                "The findings in this study goes against everything in Dr. Robert's report. ",
                answer: "3",
                options: ["Conceives", "Aplaudes", "Predicts", "Contradicts"]
            },

            {
                question: "Which of these coloquial words refers to a person?",
                answer: "1",
                options: ["Thingamajig", "Whatsisname", "Umpteen", "Thingy"]
            },

            {
                question: "Choose the correct reply: 'Have you heard? Martha is hving an affair!'",
                answer: "0",
                options: ["You should not gossip", "Don't bray", "Stop bickering", "Don't nag me"]
            },

            {
                question: "Choose the best meaning for 'a storn in a teacup'",
                answer: "1",
                options: ["A misunderstanding", "A big argument that will soon be forgotten", "Something u can't understand", "A difficult situation"]
            },

            {
                question: "What idiom has a simillar meaning to 'He's nobody's fool'",
                answer: "1",
                options: ["He has the gift of the dab", "He knows his stuff", "He's a smart-aleck", "He's one sandwich short of a picnic."]
            },

            {
                question: "Complete the sentence: Tom, could you ____ me on Friday? I'll be away from school for the day.",
                answer: "3",
                options: ["Stand for", "Stand by", "Stand up for", "Stand in for"]
            },

            {
                question: "Choose a prhasal verb to replace the word RELAX in 'I'm going to relax on the weekend, I need a break.",
                answer: "0",
                options: ["Chill", "Bottle out", "Stick it out", "Simmer down"]
            },

            {
                question: "Which of these is the odd one out?",
                answer: "3",
                options: ["Spokesperson", "Firefighter", "Flight Attendant", "Cleaning lady"]
            },

            {
                question: "Which of these is not connected with rich or upper class people?",
                answer: "1",
                options: ["New money", "Hoi polloi", "Upper crust", "Stuck-up"]
            }

        ];

        this.totalQuestions = questions.length;

        this.answer = questions[id].answer;
        this.question = questions[id].question
        this.options = questions[id].options;


    }

}
