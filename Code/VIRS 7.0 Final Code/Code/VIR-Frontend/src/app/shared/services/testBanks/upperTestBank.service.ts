import { Injectable } from '@angular/core';


export class UpperTestBank {

    public static question: string;
    public static answer: string;
    public static options: any[];

    public static totalQuestions: number;

    public static questionsLib(id: number) {

        var questions = [

            {
                quesiton: "Complete the definition: A pejorative word ______.",
                answer: "1",
                options:["Is very formal","Has a negative association","Is used mainly in conversation","Is informal"]
            },

            {
                quesiton: "Which of the following prefixes means 'Before'?",
                answer: "3",
                options: ["Ex-", "Bi-", "Re-", "Pre-"]
            },

            {
                quesiton: "What class of word can have any of the following suffixes? -hood, -ship, -ity, -ment",
                answer: "1",
                options: ["Verb", "Noun", "Adjective", "Adverb"]
            },

            {
                quesiton: "Which adjective does not form a noun with the suffix -ness?",
                answer: "3",
                options: ["Tender", "Weak", "Kind", "Strong"]
            },

            {
                quesiton: "Which of these adjectives does not exist?",
                answer: "2",
                options: ["Worn-out", "Hard-up", "Well-up", "All-out"]
            },

            {
                quesiton: "Complete the sentence: The ______ for tomorrow ia rain in most places",
                answer: "0",
                options: ["Forecast", "Fallout", "Outcome", "Feedback"]
            },

            {
                quesiton: "Which of the following English words come from Spanish?",
                answer: "0",
                options: ["Patio", "Piano", "Ghetto", "Casino"]
            },

            {
                quesiton: "Someone who is always buying new things is a ______.",
                answer: "2",
                options: ["Singleton", "Spin Doctor", "Shopaholic", "Disaster"]
            },

            {
                quesiton: "Which word is the odd one out?",
                answer: "1",
                options: ["Clink", "Splash", "Clang", "Tinkle"]
            },

            {
                quesiton: "Which sentence contains the the wrong homonym?",
                answer: "0",
                options: ["There is a sail on the department store!", "I like stake and chips",
                    "The weather in Spain was really hot", "I love red! - It's my favorite color"]
            },

            {
                quesiton: "You can rent a car ______ you have a current driving license",
                answer: "2",
                options: ["Supposing", "Unless", "On condition that", "In case"]
            },

            {
                quesiton: "Which phrase is not correct?",
                answer: "3",
                options: ["A world of difference", "Poles apart", "A great divide", "A yawning discrepancy"]
            },

            {
                quesiton: "Complete the sentence: ______ studying for a degree, I work two evenings a week in a restaurant.",
                answer: "3",
                options: ["Equally", "Moreover", "Apart from", "In addition to"]
            },

            {
                quesiton: "Do you have Angela's phone number? '______ I'll just have a look in my address book.",
                answer: "1",
                options: ["Mind you...", "Hang on...", "Anyway...", "Still..."]
            },

            {
                quesiton: "Which word is always used in the plural",
                answer: "0",
                options: ["Pijamas", "Tracksuit", "Glove", "Sock"]
            },

            {
                quesiton: "Complete the sentence: The operation was performed by a ______ of three doctors",
                answer: "3",
                options: ["Cast", "Gang", "Crew", "Team"]
            },

            {
                quesiton: "Which is the correct container for all of these? Tissues, cereal, chocolates",
                answer: "3",
                options: ["Jar", "Pack", "Carton", "Box"]
            },

            {
                quesiton: "Which word is the odd one out?",
                answer: "0",
                options: ["Breeze", "Flood", "Drizzle", "Downpour"]
            },

            {
                quesiton: "Complete the definition: 'Someone who is ______ enjoys spending time with other people",
                answer: "2",
                options: ["Eccentric", "Extravagant", "Gregarious", "Inquisitive"]
            },

            {
                quesiton: "Which of these objects does not belong in the kitchen?",
                answer: "3",
                options: ["Grater", "Wok", "Corkscrew", "Remote Control"]
            },

            {
                quesiton: "Complete both sentences: 'My car's _____' and 'The TV's _____",
                answer: "2",
                options: ["Flat", "Run out", "Broken down", "Stopped"]
            },

            {
                quesiton: "Which oh these is not a disease?",
                answer: "2",
                options: ["Rabies", "Cholera", "Poison", "Leprosy"]
            },

            {
                quesiton: "What is the opposite of bitter?",
                answer: "2",
                options: ["Spicy", "Sour", "Sweet", "Salty"]
            },

            {
                quesiton: "Which is not used to describe a part if a tree?",
                answer: "3",
                options: ["Branch", "Twig", "Trunk", "Rock"]
            },

            {
                quesiton: "Complete the sentence: I think i've got ______: My joints swollen and I can't walk very well ",
                answer: "0",
                options: ["Arthritis", "Diabeetus", "A rash", "An Ulcer"]
            },

            {
                quesiton: "Complete the sentence: When you go to L.A., don't forget to visit the ______ Sunset Blvd.",
                answer: "1",
                options: ["Exclusive", "Legendary", "Exotic", "Intoxicating"]
            },

            {
                quesiton: "Complete the sentence: A modem is a ______.",
                answer: "2",
                options: ["A camera with recors sounds and pictures", "A machine that makes copies", "A piece of Equipment used to send information from one PC to the next"
                    , "A machine that plays back sound"]
            },

            {
                quesiton: "Which of these is not associated with the internet?",
                answer: "3",
                options: ["Newsgroup", "Home-page", "FAQ", "Spreadsheet"]
            },

            {
                quesiton: "Complete the sentence: The United Kingdom is a  ______.",
                answer: "3",
                options: ["Republic", "Dictatorship", "Federation", "Monarchy"]
            },

            {
                quesiton: "Which of these people is not conected with a trial?",
                answer: "2",
                options: ["Judge", "Jury", "Detective", "Witness"]
            },

            {
                quesiton: "WHich expression means the same as 'He's likely to look for another job'?",
                answer: "0",
                options: ["I reckon he'll", "I suspect he'll", "I'm convinced he'll", "I maintain"]
            },

            {
                quesiton: "Complete the sentence: Jane is always ______ about how many languages she can speak",
                answer: "1",
                options: ["Complaining", "Boasting", "Grumpling", "Begging"]
            },

            {
                quesiton: "Which of these verbs is not connected with 'touch'?",
                answer: "2",
                options: ["Tap", "Stroke", "Glimpse", "Press"]
            },

            {
                quesiton: "Which of these can you do with your eyes?",
                answer: "3",
                options: ["Blush", "Yawn", "Grin", "Blink"]
            },

            {
                quesiton: "Complete the sentence: 'We arrived at the airport ______ for our flight'.",
                answer: "2",
                options: ["At times", "By the time", "Just in time", "At a time"]
            },

            {
                quesiton: "Complete the sentence: 'The cars ______ along at ten miles an hours because of a traffic jam'",
                answer: "1",
                options: ["Swerved", "Crawled", "Flowed", "Fluttered"]
            },

            {
                quesiton: "Chooe the correct idiom that is used when something is bothersome. ",
                answer: "0",
                options: ["A pain in the neck", "In the red", "Barking up the wrong tree", "A pie in the sky"]
            },

            {
                quesiton: "Which of these expressions means 'I've just remembered something important!'",
                answer: "1",
                options: ["Come to think of it", "That reminds me", "If you ask me", "As I was saying"]
            },

            {
                quesiton: "Complete the sentence: 'His Face suddenly turned as white as ______",
                answer: "2",
                options: ["A paper", "Snow", "A ghost", "A cloud"]
            },

            {
                quesiton: "Which of these idioms is the odd one out?",
                answer: "3",
                options: ["She's as hard as nails", "She's a really cold fish", "He has a heart of gold", "He's a bit of an awkward customer"]
            },

            {
                quesiton: "Complete the idiom: If you are worries, you should talk to someone and get it off your ______.",
                answer: "2",
                options: ["Head", "Plane", "Chest", "Shoulders"]
            },

            {
                quesiton: "Choose the correct idiom: 'We only need a small group of people to do this job - You know what they say! ______",
                answer: "3",
                options: ["There's no smoke without fire", "Many hands make light work",
                    "Never look a gift-horse in the mouth", "Too many cooks spoil the broth"]
            },

            {
                quesiton: "Complete the sentence: The band is _____ their new CD in time for Christmas",
                answer: "0",
                options: ["Bringing out", "Bringing about", "Bringing on", "Bringing up"]
            },

            {
                quesiton: "Complete the sentence: We've had cable TV ______. Now we can get about 60 channels!.",
                answer: "3",
                options: ["Put among", "Put about", "Put out", "Put in"]
            },

            {
                quesiton: "Which expression would you see on signs in a shop?",
                answer: "2",
                options: ["Trespassers will be prosecuted", "Pay and display", "Place your order here", "Hard hat area"]
            }
        ];

        this.question = questions[id].quesiton;
        this.answer = questions[id].answer;
        this.options = questions[id].options;

        this.totalQuestions = questions.length;

    }
}
