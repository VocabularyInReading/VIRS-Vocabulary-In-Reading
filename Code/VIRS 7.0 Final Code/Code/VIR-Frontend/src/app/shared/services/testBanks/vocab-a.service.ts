
export class VocabATestBank {

    public static answer: string;
    public static question: string;
    public static options: string[];

    public static totalQuestions: number;


    public static questionsLib(id: number) {

        var questions = [

            {
                question: "See: They <saw it>",
                answer: "2",
                options: ["Closed it tightly","Waited for it","Lokked at it","Started it up"]
            },

            {
                question: "Time: They have a lot of <time>",
                answer: "2",
                options: ["Money", "Food", "Hours", "Friends"]
            },

            {
                question: "Period: It was a difficult <period>",
                answer: "1",
                options: ["Question", "Time", "Thing to do", "Task"]
            },

            {
                question: "Figure: Is this the right <figure>?",
                answer: "3",
                options: ["Thing", "Place", "Time", "Number"]
            },

            {
                question: "Poor: We <are poor>",
                answer: "0",
                options: ["Have no money", "Feel happy", "Are very interested", "Do not work hard"]
            },

            {
                question: "Microphone: Please use the <microphone>.",
                answer: "1",
                options: ["Machine for making hot food", "Machine that makes sound louder", "Machine that makes things look bigger", "Small telephone"]
            },

            {
                question: "Nil: His mark for the question was <nil>.",
                answer: "1",
                options: ["Very bad", "Nothing", "Vey good", "In the middle"]
            },

            {
                question: "Pub: They went to the <pub>",
                answer: "0",
                options: ["Place where people drink and talk", "Place that looks after money", "Large building with many shops", "Building for swimming"]
            },

            {
                question: "Circle: Make a <circle>.",
                answer: "2",
                options: ["Rough picture", "Space with nothing in it", "Round shape", "Large hole"]
            },

            {
                question: "Dig: Our dog often <digs>",
                answer: "1",
                options: ["Solves a problem", "Creates a hole in the ground", "Wants to sleep", "Enters the water"]
            },

            {
                question: "Soldier: He is a <soldier>.",
                answer: "3",
                options: ["Person in a business", "Person who studies", "Person who uses metal", "Person in the army"]
            },

            {
                question: "Restore: It has been <restored>.",
                answer: "2",
                options: ["Said again", "Given to a different person", "Made like new again", "Given a lower price"]
            },

            {
                question: "Pro: He is a <pro>.",
                answer: "3",
                options: ["Someone who is employed to find out secrets", "A stupid person", "A writter", "Someone who is paid for playing a sport"]
            },

            {
                question: "Compound: They made a new <compound>.",
                answer: "1",
                options: ["Agreement", "Thing made of two or more parts", "Group of people forming a business", "Guess based on past experiences"]
            },

            {
                question: "Deficit: the company had a <large deficit>",
                answer: "0",
                options: ["Spent more money than they made", "Went down a lot in value", "Had a plan for its spending", "Large amout of money saved in a bank"]
            },

            {
                question: "Strap: He broke the <strap>",
                answer: "3",
                options: ["Promise", "Top cover", "Shallow dish for food", "Strip of strong material"]
            },

            {
                question: "Weep: He <wept>",
                answer: "1",
                options: ["Finished his course", "Cried", "Laughed", "Died"]
            },

            {
                question: "Haunt: The house is <haunted>.",
                answer: "3",
                options: ["Full of decorations", "Rented", "Sold", "Full of ghosts"]
            },

            {
                question: "Cube: I need one more <cube>.",
                answer: "1",
                options: ["Sharp object for joining things", "Solid square block", "Tall cup with no saucer", "Stiff paper folder in half"]
            },

            {
                question: "Butler: They have a <butler>",
                answer: "0",
                options: ["Man servant", "machine for cutting down trees", "Private teacher", "Puppy"]
            },

            {
                question: "Nun: We saw a <nun>",
                answer: "2",
                options: ["Long thin creature that lives in the earth", "Terrible accident", "Woman following a strict religious life", "Unexplained bright light"]
            },

            {
                question: "Olive: We bough <olives>",
                answer: "0",
                options: ["Oily fruit", "Scented flowers", "Tools for digging", "A new car"]
            },

            {
                question: "Shudder: The boy <shuddered>",
                answer: "2",
                options: ["Spoke with a low voice", "Almost fell", "Shook", "Called out loudly"]
            },

            {
                question: "Threshhold: They raised the <threshold>",
                answer: "1",
                options: ["Flag", "Point or line where something changes", "Roof inside a building", "Cost of borrowing money"]
            },

            {
                question: "Demography: This book is about <demography>",
                answer: "3",
                options: ["The study of patterns of land use", "The study of the use of pictures", "The study of mobement of water", "The study of population"]
            },

            {
                question: "Malign: His <malign> influence is still felt",
                answer: "1",
                options: ["Good", "Evil", "Vey important", "Secret"]
            },

            {
                question: "Strangle: He <strangled> her",
                answer: "0",
                options: ["Killed her by pressing her throat", "Gave her all the things she wanted", "Took her away by force", "Admired her greatly"]
            },

            {
                question: "Dinosaur: The children were pretending to be <dinosaurs>",
                answer: "3",
                options: ["robbers who work at sea", "Humans with wings", "Large creatures that breathe fire", "Animals that lived an extremely long time"]
            },

            {
                question: "Jug: He was holding <a jug>",
                answer: "0",
                options: ["A container used to hold liquids", "An informal discussion", "A soft cap", "A weapon"]
            },

            {
                question: "Crab: Do you like <crabs>?",
                answer: "2",
                options: ["Thin small cakes", "Hard collars", "Sea creatures that always walk toone side", "Large insects that sing at night"]
            },

            {
                question: "Quilt: They made a <quilt>",
                answer: "2",
                options: ["Fire", "Firm agreement", "Thick warm cover for a bed", "Feather pen"]
            },

            {
                question: "Tummy: Look at my <tummy>",
                answer: "1",
                options: ["Fabric", "Stomach", "Soft animal", "finger used for gripping"]
            },

            {
                question: "Eclipse: <There was an eclipse>",
                answer: "3",
                options: ["A strong wind blew all day", "I heard something hit the water", "People were killed", "The sun was hidden by the moon"]
            },

            {
                question: "Excrete: Thus was <excreted> recently",
                answer: "0",
                options: ["Pushed or sent out", "Made clear", "Discovered by science", "Put on a list of illegal things"]
            },

            {
                question: "Ubiquitous: Many unwanted plants are <ubiquitous>",
                answer: "2",
                options: ["Tasty", "Have strong roots", "Found everywhere", "Die away in the winter"]
            },

            {
                question: "Marrow: This is <the marrow>",
                answer: "1",
                options: ["Symbol that brings good luck to the team", "Soft center of the bone", "Control for guiding a plane", "Increase in salary"]
            },

            {
                question: "Cabaret: We saw the <cabaret>",
                answer: "1",
                options: ["Painting covering a hole", "A song and dance performance", "Small crawling creature", "Person who is half fish"]
            },

            {
                question: "Cavalier: He treated her <in a cavalier manner>",
                answer: "0",
                options: ["Without care", "With goos manners", "Awkwardly", "As a brother would"]
            },

            {
                question: "Veer: The car <veered>",
                answer: "1",
                options: ["Moved shakily", "Changed course", "Made a wide turn", "Slid without turning"]
            },

            {
                question: "Yogurt: This <yogurt> is disgusting!",
                answer: "2",
                options: ["Dark mud found in rivers", "Unhealthy, open sore", "Thick, soured milk, often with sugar", "Large purple fruit"]
            },

            {
                question: "Octopus: They saw an <octopus>",
                answer: "3",
                options: ["A ship", "A large bird", "A machine that flies", "A sea creature with eight legs"]
            },

            {
                question: "Monologue: Now he has a <monologue>",
                answer: "1",
                options: ["A single piece of glass held over an eye", "Long turn at talking without interruption", "Position with all power", "Picture made by joining letters together"]
            },

            {
                question: "Candid: Please be <candid>",
                answer: "3",
                options: ["Careful", "Show empathy", "Show remorse", "Say what you really think"]
            },

            {
                question: "Nozzle: Aim the <nozzle> toward it.",
                answer: "2",
                options: ["Space that light passes through", "Dry patch of skin", "Pipe attachment that forces water", "Sharp part of a fork"]
            },

            {
                question: "Psychosis: He has <psychosis>",
                answer: "3",
                options: ["An inability to move", "Super powers", "A body organ that process sugar", "A mental illness"]
            },

            {
                question: "Ruck: He got hurt in the <ruck>",
                answer: "2",
                options: ["Region between the stomach and the top of the leg", "Noisy street", "Group of players gatheres round the ball", "Race across a field of snow"]
            },

            {
                question: "Rouble: He had a lot of <rouble>",
                answer: "2",
                options: ["Very small red stones","Distant family member","Russian money","moral difficulty in mind"]
            },

            {
                question: "Canonical: These are <canonical examples>",
                answer: "2",
                options: ["Examples which break the usual rules","Examples taken from a religious book", "regular and widely accepted examples", "Examples discocered very recently"]
            },

            {
                question: "Puree: This <puree> is bringht green",
                answer: "0",
                options: ["Fruit or vegetable in liquid form", "Dress worn by women in India", "Skin of a fruit", "Very thin material"]
            },

            {
                question: "Vial: Put it in a <vial>",
                answer: "3",
                options: ["Device that stores electricity", "Country residense", "Dramatic scene", "Small glass bottle"]
            },

            {
                question: "Counterclaim: They made a <counterclaim>",
                answer: "0",
                options: ["A demand response made by once side in a law case", "A request for a shop to take back thigs", "An agreement between two companies", " A decorative cover for a bed"]
            },

            {
                question: "Refectory: We met in the <refectory>",
                answer: "0",
                options: ["Room for eating", "Office where legal papers can be signed", "Room for several people to sleep in", "Room with glass walls"]
            },

            {
                question: "Trill: He practised the <trill>",
                answer: "0",
                options: ["Repeated high musical sound", "Type of stringed instrument", "Way of throwing the ball", "Dance step of turning around very fast"]
            },

            {
                question: "Talon: Just look at those <talons>!",
                answer: "1",
                options: ["High points of a mountain", "Sharp hooks on the feet of a hunting bird", "Heavy metal coats to protect againts weapons", "People who make fool of themselves"]
            },

            {
                question: "Plankton: We saw a lot of <plankton> here",
                answer: "1",
                options: ["Poisonous plants that spread quick", "Small animal or plants found in water", "Trees producing hard wood", "Grey soil that often causes land to slip"]
            },

            {
                question: "Soliloquy: That was an excelent <soliloquy>",
                answer: "3",
                options: ["Song for six people", "Short clever saying", "Entertainment using lights and sound", "Speech in the theater by the character who is alone"]
            },

            {
                question: "Puma: We saw a <puma>",
                answer: "2",
                options: ["Small house made of mud bricks", "Tree from hot countries", "Large wild cat", "Very strong winds"]
            },

            {
                question: "Augur: It <augured> well",
                answer: "0",
                options: ["Promised good things for the future", "Agreed with what was expected", "Had a good color", "Rang with a clear, beautiful sound"]
            },

            {
                question: "Emir: We saw the <emir>",
                answer: "2",
                options: ["Bird with two long curved tail feathers", "Woman who cares for other people's children", "Middle Eastern chief with power in his own land", "House made out of ice"]
            },

            {
                question: "Didactic: The story <is very dedactic>",
                answer: "0",
                options: ["Tries to teach something", "Is very hard to believe", "Deals with exciting actions", "Is written witn unclear meaning"]
            },

            {
                question: "Cranny: Look what we found in the <cranny>",
                answer: "1",
                options: ["Sale of unwanted objects", "Narrow opening", "Space for storing things", "Large wooden box"]
            },

            {
                question: "Lectern: He stood at the <lectern>",
                answer: "0",
                options: ["Desk made o hold a book at a good height for reading", "Table or block used for church ceremonies", "Place where you buy drinks", "Very edge"]
            },

            {
                question: "Azalea: This <azalea>is very pretty",
                answer: "0",
                options: ["Small tree with flowers growing in groups", "Light natural fabric", "Long piece of material worn in India", "Sea shell shaped like a fan"]
            },

            {
                question: "Marsupial: It is a <marsupial>",
                answer: "3",
                options: ["An animal with small feet", "A plant that takes time to grow", "Plant with flowers that turn to the sun", "An animal with pockets for its babies"]
            },

            {
                question: "Bawdy: It was very <bawdy>",
                answer: "3",
                options: ["Unpredictable", "Innocent", "Rushed", "Indecent"]
            },

            {
                question: "Crowbar: He used a <crowbar>",
                answer: "0",
                options: ["Heavy iron bar with a curved edge", "False name", "Sharp tool to make holes", "Light metal walking stick"]
            },

            {
                question: "Spangled: Her dress was <spangled>",
                answer: "1",
                options: ["Torn into thin strips", "Covered with small bright decorations", "Made with lots of folds in fabric", "Ruined by touching something vey hot"]
            },

            {
                question: "Aver: She <averred> that it wsa the truth",
                answer: "1",
                options: ["Refused to agree", "Declared", "Believed", "Warned"]
            },

            {
                question: "Retro: It has a <retro> look",
                answer: "3",
                options: ["Very fashionable look", "Look of a piece of modern art", "Used before", "Look of something from an earlier time"]
            },

            {
                question: "Rascal: She is such a <rascal>",
                answer: "3",
                options: ["An unbeliever", "Demented", "Hard wroker", "Bad girl"]
            },

            {
                question: "Tweezers: They used <tweezers>",
                answer: "2",
                options: ["Small piece of metal for holding papers", "Small piece of string for closing wounds",
                    "A tool with  two blades for picking up small objects", "Strong tool for cutting plants"]
            },

            {
                question: "Bidet: They have <bidet>",
                answer: "0",
                options: ["Low basin for washing the body after using the toilet", "Large fierce brown dog", "Small private swimming pool", "Man to help in the house"]
            },

            {
                question: "Sloop: Whoose <sloop> is that?",
                answer: "1",
                options: ["Warm hat", "Light sailing boat", "left over food", "untidy work"]
            },

            {
                question: "Swingeing: They got <swingeing fines>",
                answer: "0",
                options: ["Very large fines", "Very small fines", "Fines paid in small amounts", "Fines that vary depending on income"]
            },

            {
                question: "Cenotaph: We met at the <cenotaph>",
                answer: "2",
                options: ["Large important church", "Public square", "Memorial for people buried somewhere else", "Underground train station"]
            },

            {
                question: "Denouement: I was dissapointed with the <denouement>",
                answer: "0",
                options: ["Ending of a story which solves the mystery", "Amount of money paid for a piece of work", "Official report of a meeting", "Small place to live"]
            },

            {
                question: "Bittern: She saw a <bittern>",
                answer: "3",
                options: ["Large bottle for storing liquids", "small green snake", "False picture caused by hot air", "Water bird with long legs and a loud call"]
            },

            {
                question: "Reconnoitre: They have gone to <reconnoitre>",
                answer: "1",
                options: ["Think again", "Make an examination of a new place", "Have a good time to mark a happy event", "Complain formally"]
            },

            {
                question: "Magnanimity: We will never forget her <magnanimity>",
                answer: "2",
                options: ["Very offensive manners", "Courage in times of trouble", "Generosity", "Complete sincere words"]
            },

            {
                question: "Effete: He has become <effete>",
                answer: "0",
                options: ["Weak and soft", "Too fond of something", "unable to leave his bed", "Extremely easy to annoy"]
            },

            {
                question: "Rollick: They were <rollick>",
                answer: "2",
                options: ["Driving very fast", "Staying away from school", "Having fun in a noisy and spirited way", "Sliding on snow"]
            },

            {
                question: "Gobbet: The cat left a <gobbet> behind",
                answer: "3",
                options: ["Strip of torn material", "Footprint", "Piece of solid waste from the body", "Lump of food returned from the stomach"]
            },

            {
                question: "Rigmarole: I hate the <rigmarole>",
                answer: "3",
                options: ["Very fast and dificult dance", "Funny character in a theatre", "Tax form", "long, pointless and complicates set of actions"]
            },

            {
                question: "Alimony: The article was about <alimony>",
                answer: "1",
                options: ["Feelings of bitternes and annoyance", "Money for the care f children, regurlarly after divorce", "Giving praise for excelent ideas", "A metal that breaks easily"]
            },

            {
                question: "Roughshod: he <rode roughshod>",
                answer: "2",
                options: ["Traveled without good preparation", "Made lots of mistakes", "Did not concider other people's feelings", "Did not care about his own comfort"]
            },

            {
                question: "Copra: They supply <copra>",
                answer: "1",
                options: ["A highly poisonous substance used to kill plants", "The dried meat from a large nut used to make oil", "A venemous snake", "Strong rope used on a sail"]
            },

            {
                question: "Bier: She lay on the <bier>",
                answer: "3",
                options: ["Folding garden chair", "Grass next to the river", "Place where boats are tied up", "Board on which a dead body is carried"]
            },

            {
                question: "Torpid: He was <torpid>",
                answer: "3",
                options: ["Undecided", "Filled with very strong feelings", "Confused", "Slow and sleepy"]
            },

            {
                question: "Dachshund: She loves her <dachsund>",
                answer: "2",
                options: ["Warm fur hat", "Thick floor rug", "Small dog with small legs", "Old musical instrument"]
            },

            {
                question: "Cadenza: What do you think of the <cadenza>?",
                answer: "3",
                options: ["Cake topped with cream and fruit", "Large box hanging from a wire", "Slow formal dance from Italy", "Passage in a piece of music that shows a player's great skill"]
            },

            {
                question: "Obtrude: These thoughts <obtruded themselves>",
                answer: "3",
                options: ["Got themselves lost", "Did not agree with each other", "Got mixed up", "Pushed themselves forward in the mind"]
            },

            {
                question: "Panzer: They saw a <panzer> getting nearer",
                answer: "2",
                options: ["Players in a marching band", "Figher planes", "Large, slow moving windowless army cars", "Policewomen"]

            },

            {
                question: "Cyborg: She read about a <cyborg>",
                answer: "0",
                options: ["An integrated human-machine system", "A musical intrument with 40 strings", "A small, newly invented object", "A warm wind in winter"]
            },

            {
                question: "Zygote: It is a <zygote>",
                answer: "0",
                options: ["An early phase of sexual reproduction", "A lot of bother over nothing", "A small animal found in South Africa", "A gun used to launch rockets"]
            },

            {
                question: "Sylvan: The painting has a <sylvan> theme",
                answer: "2",
                options: ["Lost love", "Wandering", "Forest", "Casual folk"]
            },

            {
                question: "Sagacious: She had many ideas that were <sagacious>",
                answer: "0",
                options: ["Instinctively clever", "Ridiculous and wild", "About abusing people and being abused", "Rebelious and dividing"]
            },

            {
                question: "Spatiotemporal: My theory is <spatiotemporal>",
                answer: "3",
                options: ["Focused on small details", "Annoying to people", "Objectionably modern", "Oriented to time and space"]
            },

            {
                question: "Casuist: Don't <play the casuist> with me",
                answer: "2",
                options: ["Focus only on self-pleasure", "Act like a tough guy", "Make judgements about my conduct of duty", "Be stupid"]
            },

            {
                question: "Cyberpunk: I like <cyberpunk>",
                answer: "1",
                options: ["Medicine thta does not use drugs", "One variety of science-fiction", "Art and science of eating", ""]
            },

            {
                question: "Pussyfoot: Let's not <pussyfoot around>",
                answer: "1",
                options: ["Criticise unreasonably", "Take care to avoid confrontation", "Attack indirectly", "Suddenly start"]
            },
        ];

        this.totalQuestions = questions.length;

        this.answer = questions[id].answer;
        this.question = questions[id].question
        this.options = questions[id].options;
    }
}
