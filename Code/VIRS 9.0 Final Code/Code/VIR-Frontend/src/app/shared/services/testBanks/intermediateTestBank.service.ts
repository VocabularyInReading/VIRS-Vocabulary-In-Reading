import { Injectable } from '@angular/core';


@Injectable()
export class IntermediateTestBank {

    public static question: string;
    public static answer: string;
    public static options: any[];

    public static totalQuestions: number;

    public static questionsLib(id: number) {

        var questions = [

            {
                question: "Jim Broke his leg and went to the hospital. 'His leg' is ",
                answer: "3",
                option: ["A personal pronoun", "an uncountable noun", "A transitive verb", "A direct object"],
            },

            {
                question: "Which prefix makes the opposite of all these words?: Appear, like, honest, agree",
                answer: "0",
                option: ["dis-", "un-", "mis-", "in-"],
            },

            {
                question: "which noun forms an adjective with the suffix -able?",
                answer: "2",
                option: ["Sad", "Pain", "Fashion", "Danger"],
            },

            {
                question: "Which word cannot be both a noun and a verb?",
                answer: "3",
                option: ["Kiss", "Dream", "Rest", "Meet"],
            },

            {
                question: "Which of these collocations is not correct?",
                answer: "2",
                option: ["A weak accent", "A strong coffee", "Draw some contract", "Hard work"],
            },

            {
                question: "What does the idiom 'Make up your mind' mean?",
                answer: "1",
                option: ["Don't worry", "Decide", "No problem", "It's your decision"],
            },

            {
                question: "Choose the correct preposition for these verbs: Apologize, wait, apply, look",
                answer: "0",
                option: ["To", "On", "For", "From"],
            },

            {
                question: "Which of these does not make a fixed expression with 'by'?",
                answer: "0",
                option: ["My own", "Mistake", "Hand", "Accident"],
            },

            {
                question: "Which expression can you use as a reply to 'Thank you'?",
                answer: "2",
                option: ["It does not matter", "Please", "No problem", "Sorry"],
            },

            {
                question: "Which of these expressions is the odd one out?",
                answer: "1",
                option: ["I don't mind this film", "I can't stand this film", "I quite like this film", "I'm really into this film"],
            },

            {
                question: "Your friend passed her driving test. What do you say?",
                answer: "1",
                option: ["Oh, what a pitty", "Oh, thats brilliant!", "I don't mind", "Really? interesting."],
            },

            {
                question: "Complete with the correct phrasal verb. 'What time does your alarm clock ______ in the morning?",
                answer: "2",
                option: ["Get through", "Give up", "Go off", "Go out"],
            },

            {
                question: "Choose the right verb for: 'Let's ______ a drink together' and 'Could I ______ the bill please?",
                answer: "3",
                option: ["Take", "Drink", "Look", "Have"],
            },

            {
                question: "Which of these have the wrong verb?",
                answer: "2",
                option: ["Joe is doing the shopping", "Please take a seat", "Can you make me a favor?", "Stan is making progress"],
            },

            {
                question: "Which verb can be used with all these?: A bus, a cold, a ball, a criminal",
                answer: "0",
                option: ["Catch", "Get", "Find", "Take"],
            },

            {
                question: "Which phrase can be used with all these nouns? Paper, cake, wood, advice",
                answer: "3",
                option: ["A slice of", "A box of", "A packet of", "A piece of"],
            },

            {
                question: "Complete the sentence: The food was ______ ",
                answer: "1",
                option: ["Very happy", "Quite delicious", "Unpleseantly delicious", "Very upset"],
            },

            {
                question: "Complete the sentence: The plane flew ______the Atlantic Ocean",
                answer: "3",
                option: ["Under", "Acording", "Sideways", "Across"],
            },

            {
                question: "Complete the sentence: ______ I watered the plants, they did not grow",
                answer: "3",
                option: ["Nonetheless", "In spite of", "However", "Eventhough"],
            },


            {
                question: "Complete the sentence: I lost my ticket, ______",
                answer: "1",
                option: ["Unless i walked home", "So I had to walk home", "Because I had to walk home", "No way but to walk"],
            },

            {
                question: "Which animal does not live on a farm?",
                answer: "2",
                option: ["Sheep", "Cow", "Gorilla", "Horse"],
            },


            {
                question: "What do you do when you are tired or bored?",
                answer: "0",
                option: ["Yawn", "Laugh", "Cry", "Shake hands"],
            },

            {
                question: "What is the opposite of 'generous'?",
                answer: "1",
                option: ["Honest", "Greedy", "Prideful", "Ungenerous"],
            },


            {
                question: "What can't we do with our hands?",
                answer: "3",
                option: ["Clap", "Wave", "Touch", "Stroll"],
            },

            {
                question: "Choose the definition for: 'Suburbs' (i.e. We live in the suburbs)",
                answer: "1",
                option: ["In the center of the town", "An area outside the center of town", "An area with no factories", "Downtown"],
            },


            {
                question: "Which of the following is not in the living room?",
                answer: "2",
                option: ["A carpet", "A TV", "A cooker", "An armchair"],
            },

            {
                question: "Which phrase is not correct?",
                answer: "0",
                option: ["The worth of living", "A good standard of living", "The cost of living", "Living production"],
            },


            {
                question: "Complete the sentence: Sam was ______ in a car accident",
                answer: "2",
                option: ["Tickled", "Happy", "Injured", "Promoted"],
            },

            {
                question: "Which is not a fruit?",
                answer: "1",
                option: ["Pineapple", "Brocolli", "Plum", "Grapes"],
            },


            {
                question: "Complete the sentence: Don't eat to many cream cakes, they are ______",
                answer: "0",
                option: ["Fattening", "Spicy", "Chilled", "Healthy"],
            },

            {
                question: "Complete the sentence: When you want to pass a car in front of you, you should wait until it is safe to ______",
                answer: "3",
                option: ["Park", "Pull out", "Brake", "Overtake"],
            },


            {
                question: "Which of these jobs is not a skilled manual job?",
                answer: "1",
                option: ["Plumber", "Pilot", "Electrician", "Mechanic"],
            },

            {
                question: "Which of the following in not in an office?",
                answer: "2",
                option: ["Filling cabinet", "Photocopier", "Chest of drawers", "Wastepaper basket"],
            },


            {
                question: "Which phrase means the same?: Prices have increased slowly",
                answer: "0",
                option: ["Risen gradually", "Dropped sharply", "Fallen slowly", "Gone up sharply"],
            },

            {
                question: "Which of the following verbs is the odd one out?",
                answer: "3",
                option: ["Kick", "Throw", "Hit", "Whistle"],
            },


            {
                question: "Complete the sentence: What is the film ______ ?",
                answer: "2",
                option: ["Take place", "Happening", "About", "Set"],
            },

            {
                question: "Which word means the same as 'the latests'?",
                answer: "3",
                option: ["The last", "The best", "The oldest", "The newest"],
            },


            {
                question: "Complete the sentence: You can ______ the file from the Internet if you want to keep it",
                answer: "2",
                option: ["Store", "Browse", "Download", "Stow"],
            },

            {
                question: "Complete the sentence: The police have arrested a man and ______",
                answer: "0",
                option: ["Charged him with murder", "Investigated a crime", "Brokn the law", "Proven he is guilty"],
            },


            {
                question: "Complete the sentence: A ______ is when there is no rain",
                answer: "1",
                option: ["Famine", "Drought", "Flood", "Disaster"],
            },

            {
                question: "Complete the sentence: The center of Rome is always ______ with tourists at this time of year",
                answer: "3",
                option: ["Lively", "Cosmopolitan", "Busier", "Packed"],
            },


            {
                question: "Which phrase has the wrong preposition?",
                answer: "2",
                option: ["At midnight", "For ages", "During two hours", "By 8 o'clock"],
            },

            {
                question: "What color do you get when you mix together red and blue?",
                answer: "0",
                option: ["Purple", "Green", "Grey", "Orange"],
            },


            {
                question: "Which expression means 'be careful'?",
                answer: "2",
                option: ["Out of order", "Do not disturb", "Mind your step", "Look after"],
            },

            {
                question: "What does the word 'stuff' refer to in: Will you please pick up your stuff and put it in the washing basket?!'",
                answer: "0",
                option: ["Clothes", "Books", "Rubbish", "Make-up"],
            },


            {
                question: "Which of the following is not informal or spoken English?",
                answer: "1",
                option: ["Excuse me, Where's the loo?", "If you require further assistance, contact the manager",
                    "I reckon you'll get a job", "The flat is handy for shopping"],
            },

            {
                question: "What does 'My phone went dead' mean?",
                answer: "3",
                option: ["It is broken", "It is frozen", "No service", "Battery with no charge"],
            },


            {
                question: "What color do you get when you mix red and yellow?",
                answer: "0",
                option: ["Orange", "Purple", "Blue", "Green"],
            }

        ];

        this.question = questions[id].question;
        this.answer = questions[id].answer;
        this.options = questions[id].option;

        this.totalQuestions = questions.length;

    }


}
