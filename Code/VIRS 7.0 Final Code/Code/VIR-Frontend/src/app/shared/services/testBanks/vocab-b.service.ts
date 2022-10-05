
export class VocabBTestBank {

    public static answer: string;
    public static question: string;
    public static options: string[];

    public static totalQuestions: number;

    public static questionsLib(id: number) {

        var questions = [

            {
                question: "Drive: He <drives> fast.",
                answer: "3",
                options: ["Swims", "Learns", "Throws a ball", "Uses a car"],

            },

            {
                question: "Jump: She tried to <jump>.",
                answer: "1",
                options: ["Lie on top of the water", "Get off the ground suddenly", "Stop the car at the edge of the road", "Move very fast"],

            },

            {
                question: "Shoe: Where is your<shoe>?",
                answer: "3",
                options: ["Thing you throw", "Thing u keep money in", "Thing used for writing", "This u wear on your foot"],

            },

            {
                question: "Standard: <Her standards> are very high.",
                answer: "1",
                options: ["Bits at the back under her shoes ", "Levels she reaches in everything", "Marks she gets in school", "Money she asks for"],

            },

            {
                question: "Basis: This was used as the <basis>",
                answer: "3",
                options: ["Answer", "Place to take a rest", "Next step", "Main part"],

            },

            {
                question: "Maintain: Can they <maintain it>?",
                answer: "0",
                options: ["Keep it as it is", "Make it larger", "Get a better one", "Get it"],

            },

            {
                question: "Stone: He sat on a <stone>",
                answer: "0",
                options: ["Hard thing", " Kind of chair", " Soft thing on the floor", "Part of a tree"],

            },

            {
                question: "Upset: I am <upset>",
                answer: "3",
                options: ["Tired", "Famous", "Rich", "Unhappy"],

            },

            {
                question: "Drawer: The <drawer> was empty",
                answer: "0",
                options: ["Sliding box", "Plce where cars are kept", "Animal house", "Cupboard to keep things cold"],

            },

            {
                question: "Joke: We did not understand the <joke>",
                answer: "0",
                options: ["Attempt at humor", "False statement", "Way of speaking", "Way of thinking"],

            },

            {
                question: "Pave: It was <paved>",
                answer: "3",
                options: ["Prevented from going through", "Divided", "Given gold edges", "Covered with a hard surface"],

            },

            {
                question: "Rove: He couldn't stop <roving>",
                answer: "1",
                options: ["Getting drunk", "Traveling around", "Working hard", "Drinking water"],

            },

            {
                question: "Lonesome: He felt <lonesome>.",
                answer: "2",
                options: ["Happy", "Tired", "Without company", "Angered"],

            },

            {
                question: "Allege: They <alleged it>",
                answer: "0",
                options: ["Claimed it without proof", "Stole it", "Proved it", "Argued against"],

            },

            {
                question: "Remedy: We found a good <remedy>",
                answer: "1",
                options: ["Place to eat", "Way to fix a problem", "Rule about numbers", "Way to prepare food"],

            },

            {
                question: "Dash: They <Dashed> it over",
                answer: "0",
                options: ["Moved quickly", "Moved slowly", "Looked quickly", "Fought"],

            },

            {
                question: "Peel: Shal I <peel it>?",
                answer: "1",
                options: ["Eat it", "Take the skin off", "Make it white", "Cut intp pieces"],

            },

            {
                question: "Bacterium: They didnt find a single <bacterium>",
                answer: "0",
                options: ["Small living creature causing disease", "Plant with red or orange flowers", "Animal that carries water", "Thing that has been stolen and sold"],

            },

            {
                question: "Thesis: She has completed her <thesis>",
                answer: "2",
                options: ["Talk given by a judge", "First year of employment", "Long written report of study carried out for a university", "Extended course of hospital treatment"],

            },

            {
                question: "Authentic: It is <authentic>",
                answer: "0",
                options: ["Real", "Fake", "Old", "Desert like"],

            },

            {
                question: "Miniature: It is a <miniature>",
                answer: "1",
                options: ["Instrument for lookin at very small objects", "Very small things of its kind", "Small living creature", "Small lines to join letters in handwriting"],

            },

            {
                question: "Fracture: They found a <fracture>",
                answer: "0",
                options: ["Break", "Small pieces", "Short coat", "Discount certificate"],

            },

            {
                question: "Patience: He <has no patience>",
                answer: "2",
                options: ["Has no free time", "Has no faith", "Will nit wait happily", "Does not know what is fair"],

            },

            {
                question: "Scrub: He is <Scrubbing it>",
                answer: "2",
                options: ["Cutting Shallw lines into it", "Repairing it", "Washing it energetically", "Drawing simple pictures of it"],

            },

            {
                question: "Vocabulary: You will need more <vocabulary>",
                answer: "0",
                options: ["Words", "Skill", "Money", "Guns"],

            },

            {
                question: "Accesory: They gave us <some accesories>",
                answer: "3",
                options: ["Papers giving us the right to enter a country", "Official orders", "Ideas to choose between", "Extra pieces"],

            },

            {
                question: "Fen: The story story is set in <the fens>",
                answer: "0",
                options: ["A piece of low land covered in water", "A piece of high, hilly land", "A block of poor-quality houses", "A time ago"],

            },

            {
                question: "Puritan: He is a <puritan>",
                answer: "1",
                options: ["Person who likes attention", "Person with strict morals", "Person with a moving home", "Person who is frugal"],

            },

            {
                question: "Awe: They looked at the mountain <in awe>",
                answer: "2",
                options: ["Worried expression", "Interested expression", "Sence of wonder", "Feeling of respect"],

            },

            {
                question: "Bristle: The <bristles> are too hard",
                answer: "1",
                options: ["Questions", "Short stiff hairs", "Folding beds", "Bottom of the shoes"],

            },

            {
                question: "Erratic: He wsa <erratic>",
                answer: "3",
                options: ["Without fault", "Very bad", "Very respectful", "Unsteady"],

            },

            {
                question: "Null: His incluence <was null>",
                answer: "2",
                options: ["Has goof results", "Did not help much", "Had no effect", "Lasted a long time"],

            },

            {
                question: "Perturb: I was <perturbed>",
                answer: "1",
                options: ["Made to agree", "Worried and puzzled", "Very wet", "Corruptly sexual"],

            },

            {
                question: "Peasentry: He did a lot for the <peasentry>",
                answer: "0",
                options: ["Local people", "Place of worship", "Working class people", "Rich"],

            },

            {
                question: "Palette: He lost his <palette>",
                answer: "3",
                options: ["Coins", "Wish to eat food", "Female companion", "Artist's board to mix paint"],

            },

            {
                question: "Devious: your plans are <devious>",
                answer: "0",
                options: ["Tricky and threatening", "Well-developed", "Not well thought out", "Expensive"],

            },

            {
                question: "Hallmark: Does it have a <hallmark>",
                answer: "1",
                options: ["Stamp to show when it should be used by", "Stamp to show the quality", "Mark to show it is aproved by royals", "Mark or stain to prevent forgery"],

            },

            {
                question: "Haze: We looked through the haze",
                answer: "1",
                options: ["Small round window", "Unclear air", "List of names", "Cover for a window"],

            },

            {
                question: "Gimmick: That's a good <gimmick>",
                answer: "2",
                options: ["Thing for stangding on to worn high abouve the ground", "Small thing with pockets", "Attention-getting action or image", "Clever plar or trick"],

            },

            {
                question: "Yoga: She has started <yoga>",
                answer: "1",
                options: ["Handwork done by knotting thread", "Form of exercise for the body and mind", "Game with a cork", "Type of dance from eastern countries"],

            },

            {
                question: "Sizzle: Listen to it <sizzle>",
                answer: "2",
                options: ["Turn to stone", "Release pressure", "Make noise while being cooked", "Force out liquid"],

            },

            {
                question: "Psychotherapy: She wanted <psychotherapy>",
                answer: "3",
                options: ["Mutual operation of two things", "Ability to govern", "Unfriendly reaction", "Treatment for mental illness"],

            },

            {
                question: "Mystique: He has lost his <mistique>",
                answer: "1",
                options: ["Healthy body", "Secret way he makes other people think he has a special skill", "Woman he dated", "Hair on his upper lip"],

            },

            {
                question: "Communique: Have you seen their <communique>?",
                answer: "1",
                options: ["Critical report about an organization", "Garden owned by mary members of a community", "Printed material", "Official announcement"],

            },

            {
                question: "Thesaurus: She used the <thesaurus>",
                answer: "0",
                options: ["Kind of dictionary", "Kind of dinosaur", "Chemical compound", "Injection under the skin"],

            },

            {
                question: "Dissonant: This is very <dissonant>",
                answer: "0",
                options: ["Full of sound that are not nice together", "Full if signs of death", "Full of unwanted stops", "Full of garbage"],

            },

            {
                question: "Tracksuit: She was wearing her <tracksuit>",
                answer: "1",
                options: ["A dress", "Set of clothing used for running", "Knitted shirt", "Angry expresion"],

            },

            {
                question: "Spleen: His <spleen> was damaged",
                answer: "1",
                options: ["Knee bone", "Organ found near the stomach", "Pipe taking waste water out", "Respect for himself"],

            },

            {
                question: "Caffeine: This contians a lot of <caffeine>",
                answer: "3",
                options: ["Substance that makes u sleepy", "Ideas not correct", "Dirty water", "Substance that makes you excited"],

            },

            {
                question: "Impale: He noearly got <impaled>",
                answer: "2",
                options: ["Charged with a serious offence", "put in prison", "Stuck through with a sharp instrument", "Involved in a dispute"],

            },

            {
                question: "Jovial: He was very <jovial>",
                answer: "2",
                options: ["Low o a social scale", "Likely to critize others", "Full of fun", "Friendly"],

            },

            {
                question: "Dingy: Its was a <dingy> place",
                answer: "1",
                options: ["Cold, damp", "Poorly lit", "Delightful", "Hot"],

            },

            {
                question: "Kindergarten: This is a good <kindergarten>",
                answer: "1",
                options: ["Activity that allows you to forget things", "Place of learning for childres too young for school", "Strong, deep bag carrid out on the back", "Place where you may borrow books"],

            },

            {
                question: "Locust: There were hundres of <locusts>",
                answer: "2",
                options: ["Unpaid helpers", "Vegetarians", "Creatures with wings", "Fragant flowers"],

            },

            {
                question: "Lintel: He painted the <lintel>",
                answer: "0",
                options: ["Beam accross the top of a window", "Small boat for getting to land from a big boat", "Beautiful tree with green fruit", "Board which shows the scene in a theatre"],

            },

            {
                question: "Upbeat: I am feeling really <upbeat>",
                answer: "1",
                options: ["Upset", "Good", "Hurt", "Confused"],

            },

            {
                question: "Pallor: <His pallor> caused them concern",
                answer: "1",
                options: ["His unusually high temperature", "Faint color of the skin", "Lack of interest", "Group of friends"],

            },

            {
                question: "Skylark: We watched a <skylark>",
                answer: "3",
                options: ["Show with planes flying in patterns", "Human-made object", "Person who does funny tricks", "Small bird that flies high as it sings"],

            },

            {
                question: "Beagle: I have two <beagles>",
                answer: "2",
                options: ["Fast cars", "Large guns", "Small dogs with long ears", "House built at holliday places"],

            },

            {
                question: "Atoll: The <atoll> was beautiful",
                answer: "0",
                options: ["Low island with sea water in the middle", "Art created by weaving pictures from fine string", "Small crown with many valuable stones", "Places where a river flows through a narrow spot"],

            },

            {
                question: "Hutch: Please clean the <hutch>",
                answer: "3",
                options: ["Thing with metal bars to keep dirt out of water pipes", "Space in the back of a car used for storage", "Round metal thing in the middle of a wheel", "Cage for small animals"],

            },

            {
                question: "Gauche: He was <gauche>",
                answer: "2",
                options: ["Talkative", "Flexible", "Awkward", "Determined"],

            },

            {
                question: "Cordillera: They were stopped by the <cordillera>",
                answer: "2",
                options: ["Special law", "Armed ship", "Line of mountains", "Firstborn son of a king"],

            },

            {
                question: "Limpid: He looked into her <limpid> eyes",
                answer: "0",
                options: ["Clear", "Sad", "Happy", "Beautiful"],

            },

            {
                question: "Aperitif: She had an <aperitif>",
                answer: "3",
                options: ["Long chair", "Private singing teacher", "Large hat", "Drink taken before a meal"],

            },

            {
                question: "Scrunch: It was <scrunched up>",
                answer: "1",
                options: ["Done withmany mistakes", "Crushed togeter", "Cut into large pieces", "Thrown individually"],

            },

            {
                question: "Instantiate: You need to <instantiate> that",
                answer: "2",
                options: ["Make happen quickly", "Put that into the correct place", "Give a real example of it", "Explain it"],

            },

            {
                question: "Landfall: The days after the <landfall> were busy",
                answer: "3",
                options: ["Ceremony to bless the land", "Bike event on a mountain", "Acceptance of foreign land", "The seeing of land after a journey by sea or air"],

            },

            {
                question: "Headstrong: He was a <headstrong child>",
                answer: "3",
                options: ["Very clever child", "Child who was given many good things", "Very fat child", "Determined to do what he wants"],

            },

            {
                question: "Supercilious: She suddenly became <supercilious>",
                answer: "0",
                options: ["Proud and not respectful", "Extremely stupid", "Able to think", "Overweight"],

            },

            {
                question: "Torpor: She sank into <a torpor>",
                answer: "1",
                options: ["A deep soft chair", "An inactive state", "Unhappy state", "Bed cover with feathers"],

            },

            {
                question: "Coven: She is a leader of a <coven>",
                answer: "2",
                options: ["Small singing group", "Business owned by its workers", "Secret society", "Group of church women"],

            },

            {
                question: "Sputnik: He told them about the <sputnik>",
                answer: "2",
                options: ["Rare animal", "Trap set by police", "Objet that travels high in the sky round the earth", "Secret organization with evil plans"],

            },

            {
                question: "Mozzarella: We need some <mozzarella>",
                answer: "2",
                options: ["Sweet fruity sauce", "Cheap wine", "Mild cheese", "Lemon grass"],

            },

            {
                question: "Wordaday: These are <workaday> clothes",
                answer: "0",
                options: ["Plain and practical clothes", "Old and worn out clothes", "Party clothes", "Dirty clothes"],

            },

            {
                question: "Lemur: We saw a <lemur>",
                answer: "2",
                options: ["Priest from eastern religion", "Person with skin disease", "Furry animal with long tail", "Purple fish from hot countries"],

            },

            {
                question: "Pantograph: The <pantograph> is broken",
                answer: "2",
                options: ["Intrument which plays music from tubes", "Intrument which measures temperature", "Framework of moving bars for copying plans", "Pen with a metal point"],

            },

            {
                question: "Planetarium: The <planetaruim> was interesting",
                answer: "1",
                options: ["Place where planets are built", "Place where a machine shows how the planets move", "Course to teach people planning skills", "Place whre fish live"],

            },

            {
                question: "Vitreous: These rocks are <vitreous>",
                answer: "3",
                options: ["Very heavy", "Easy to break", "Full of small holes", "Like glass"],

            },

            {
                question: "Cerise: Her dress was <cerise>",
                answer: "0",
                options: ["A bright red color", "Made of a thin material", "Pale blue green color", "Made of expensive material"],

            },

            {
                question: "Frankincense: He brought some <frankincense>",
                answer: "3",
                options: ["Swert smelling  flower", "Soft French cheese", "Food made from yellow rice", "Good smelling substance that comes out of trees"],

            },

            {
                question: "Feint: He made a <feint>",
                answer: "2",
                options: ["Small caje with dried fruit", "Thing with wheels", "Pretend attack to trick the enemy", "Serious mistake"],

            },

            {
                question: "Muff: This <muff> belonged to my mother",
                answer: "0",
                options: ["Tube of animal hair for keeping the hands warm", "Cover for a teapot", "Long rope of feathers to wear around the neck", "Bed cover made from square patches"],

            },

            {
                question: "Ablution: He <performed his abluitions",
                answer: "3",
                options: ["Did his exercises to stay healthy", "Played a difficult piece of music", "Did all his duties as a church minister", "Washed himself to get readt"],

            },

            {
                question: "Exactitude: She was wll knows for hr <exactitude>",
                answer: "3",
                options: ["Courage under pressure", "Sense of fairness", "Habit of making unreasonable demands", "Ability to be very accurate"],

            },

            {
                question: "Speedometer: Thev <speedometer> stoped working",
                answer: "1",
                options: ["Instument that shows changes in weather", "Thing that measures how fast you go", "Things that keeps the room warm", "Tube put in a person to let liquids in their body"],

            },

            {
                question: "Serviette: Where is my serviette?",
                answer: "3",
                options: ["House maid", "Piece of glass which makes things look bigger", "Large flat plate", "Piece of cloth or paper for wiping your mouth"],

            },

            {
                question: "Scrumptious: This is <scrumptious>",
                answer: "2",
                options: ["Very expensive", "Very dull", "Delightful in taste", "Horrendous"],

            },

            {
                question: "Poppadom: Did you put the <poppadom> on the table?",
                answer: "0",
                options: ["Thin, slightly hard piees of fried bread", "Small pieces of food, usually raw", "Cloths for protecting the table", "Small weets"],

            },

            {
                question: "Hydrofoil: He studies <hydrofoil>",
                answer: "1",
                options: ["Crops produces by the sea", "Devices that push boats clear of the water", "Components of rock", "Amazing curls and twists"],

            },

            {
                question: "Bylaw: They made a <bylaw>",
                answer: "1",
                options: ["Publisher list of older books", "Secondary law", "Law that morally condemns people", "Old law"],

            },

            {
                question: "Nymphomaniac: Don't be such a <nymphomaniac>",
                answer: "0",
                options: ["Person expressing uncontrolled sexual desire", "Antisocial person", "Innocent rural person", "Strong person"],

            },

            {
                question: "Maladroit: He is <maladroit>",
                answer: "1",
                options: ["Feeling sick to he stomach", "Physically awkward", "Rather silly", "Short tempered"],

            },

            {
                question: "Taxon: I think it belongs in this <taxon>",
                answer: "2",
                options: ["Tax category", "Tax relief", "Category of creature", "Room for safekeeping"],

            },

            {
                question: "Canoodle: They are always <canoodling>",
                answer: "3",
                options: ["Playing around", "Fighting", "Joking around", "Stroking or kissing one another"],

            },

            {
                question: "Stupa: Look at the <stoopa>",
                answer: "3",
                options: ["Tall haitstyle", "Woman with bad sexual reputation", "Temporary platform for a dead person", "Asian religious memorial"],

            },

            {
                question: "Dramaturgical: It has a <dramaturgical> effect",
                answer: "0",
                options: ["Theatrical", "Wrongful", "Joyful", "Unpleseant"],

            },


        ];

        this.totalQuestions = questions.length;

        this.answer = questions[id].answer;
        this.question = questions[id].question
        this.options = questions[id].options;
    }

}
