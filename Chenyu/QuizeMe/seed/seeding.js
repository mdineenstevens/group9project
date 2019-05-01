const DBFunc = require("../data/index");
const connection = require("../data/config/mongoConnection");
// const collection = require("../data/config/mongoCollections");
// const Db = require('mongodb').Db;
const CAND = DBFunc.candidates;
const CREATOR = DBFunc.creators;
const QUIZ = DBFunc.quizzes;
const QUES = DBFunc.questions;

async function main() {

    const db = await connection();

    ///////////////////////REGISTER PART///////////////////////
    const cand_1 = await CAND.registar("Hangyu Wang", "HWang2019");
    const cand_2 = await CAND.registar("Michael Dineen", "MDineen2019");
    const cand_3 = await CAND.registar("Chenyu Tian", "CTian2019");
    const cand_4 = await CAND.registar("Liam Nagel", "LNagel2019");
    console.log("//////////////////The candidates is finished//////////////////")

    const creator_1 = await CREATOR.registar("Turing", "No1ModernCS");
    const creator_2 = await CREATOR.registar("Gagarin", "No1Astronaut");
    const creator_3 = await CREATOR.registar("Mozart", "No1Musician");
    const creator_4 = await CREATOR.registar("Darwin", "No1Biologist");
    const creator_5 = await CREATOR.registar("Van Gogh", "No1Painter");
    console.log("//////////////////The creators is finished//////////////////")

    ///////////////////////Question Create PART///////////////////////
    /////////////For creator_1: Turing////////////////
    const Content1_1 = "The brain of any computer system is";
    const Answers1_1 = ["CPU"];
    const Options1_1 = ["ALU", "Memory", "Control unit"];
    const Content1_2 = "A computer assisted method for the recording and analyzing of existing or hypothetical systems is";
    const Answers1_2 = ["Data flow"];
    const Options1_2 = ["Data transmission", "Data capture", "Data processing"];
    const Content1_3 = "Which of the following computer language is used for artificial intelligence";
    const Answers1_3 = ["PROLOG"];
    const Options1_3 = ["FORTRAN", "C", "COBOL"];
    const Content1_4 = "A computer program that converts assembly language to machine language is";
    const Answers1_4 = ["Assembler"];
    const Options1_4 = ["Compiler", "Interpreter", "Comparator"];
    const Content1_5 = "Which type of system puts the user into direct conversation with the computer through a keyboard";
    const Answers1_5 = ["Interactive computer"];
    const Options1_5 = ["Real time processing", "Batch processing", "Time sharing"];
    const Content1_6 = "Which computer has been designed to be as compact as possible?";
    const Answers1_6 = ["Micro computer"];
    const Options1_6 = ["Mini", "Super computer", "Mainframe"];
    const Content1_7 = "Which method is used to connect a remote computer?";
    const Answers1_7 = ["Dialup"];
    const Options1_7 = ["Device", "Diagnostic", "Logic circuit"];
    const Content1_8 = "A systems programming language for microcomputers in the Intel family is";
    const Answers1_8 = ["PL/M"];
    const Options1_8 = ["PL/C", "PL/CT", "PLA"];
    const Content1_9 = "A general purpose single-user microcomputer designed to be operated by one person at a time is";
    const Answers1_9 = ["PC"];
    const Options1_9 = ["Special-purpose computer", "KIPS", "M"];
    const Content1_10 = "Which device of computer operation dispenses with the use of the keyboard?";
    const Answers1_10 = ["Mouse"];
    const Options1_10 = ["Joystick", "Light pen", "Touch"];
    const Content1_11 = "The microcomputer, Intel MCS-80 is based on the widely used Intel";
    const Answers1_11 = ["8080 microprocessor"];
    const Options1_11 = ["8085 microprocessor", "8086 microprocessor", "8082 microprocessor"];
    const Content1_12 = "Any storage device added to a computer beyond the immediately usable main storage is known as";
    const Answers1_12 = ["Backing store"];
    const Options1_12 = ["Floppy disk", "Hard disk", "Punched card"];
    const Content1_13 = "Which output device is used for translating information from a computer into pictorial form on paper.";
    const Answers1_13 = ["Plotter"];
    const Options1_13 = ["Mouse", "Touch panel", "Card punch"];
    const Content1_14 = "Which of the following are the two main components of the CPU?";
    const Answers1_14 = ["control unit and ALU"];
    const Options1_14 = ["control unit and registers", "registers and main memory", "ALU and bus"];
    const Content1_15 = "The function of CPU is";
    const Answers1_15 = ["to read, interpret and process the information and instruction"];
    const Options1_15 = ["to provide a hard copy", "to communicate with the operator", "to provide external storage of text"];
    const Content1_16 = "A computer system consisting of its processor, memory and I/O devices accepts data, processes it and produces the output results. Can you tell in which component is the raw data fed?";
    const Answers1_16 = ["Main memory"];
    const Options1_16 = ["Mass Memory", "Logic unit", "Arithmetic unit"];
    const Content1_17 = "When did arch rivals IBM and Apple Computers Inc. decide to join hands?";
    const Answers1_17 = ["1991"];
    const Options1_17 = ["1978", "1984", "1990"];
    const Content1_18 = "The transistorized computer circuits were introduced in the";
    const Answers1_18 = ["Second generation"];
    const Options1_18 = ["First generation", "Third generation", "Fourth generation", "Fifth generation"];
    const Content1_19 = "The memory sizes in mainframe computers and advanced technology micro computers are expressed as";
    const Answers1_19 = ["Megabytes"];
    const Options1_19 = ["Bytes", "Kilo-bytes", "Bits"];
    const Content1_20 = "A memory bus is mainly used for communication between";
    const Answers1_20 = ["processor and memory"];
    const Options1_20 = ["processor and I/O devices", "I/O devices and memory", "input device and output device"];

    const content1 = [  Content1_1, Content1_2, Content1_3, Content1_4, Content1_5,
                        Content1_6, Content1_7, Content1_8, Content1_9, Content1_10,
                        Content1_11, Content1_12, Content1_13, Content1_14, Content1_15,
                        Content1_16, Content1_17, Content1_18, Content1_19, Content1_20
                    ]
    const answer1 = [   Answers1_1, Answers1_2, Answers1_3, Answers1_4, Answers1_5,
                        Answers1_6, Answers1_7, Answers1_8, Answers1_9, Answers1_10,
                        Answers1_11, Answers1_12, Answers1_13, Answers1_14, Answers1_15,
                        Answers1_16, Answers1_17, Answers1_18, Answers1_19, Answers1_20
                    ]
    const option1 = [   Options1_1, Options1_2, Options1_3, Options1_4, Options1_5,
                        Options1_6, Options1_7, Options1_8, Options1_9, Options1_10,
                        Options1_11, Options1_12, Options1_13, Options1_14, Options1_15,
                        Options1_16, Options1_17, Options1_18, Options1_19, Options1_20
                    ]
    for(let i = 0; i < content1.length; i = i+1){
        await QUES.createQuestion(creator_1._id, 
            content1[i], 
            answer1[i], 
            option1[i] );
    }
    console.log(`creator1 is finished.`)

    ///////////////////////Question Create PART///////////////////////
    /////////////For creator_2: Gagarin////////////////
    const Content2_1 = "The following is (are) example(s) of celestial body (ies).";
    const Answers2_1 = ["Sun, Moon and Stars"];
    const Options2_1 = ["Sun", "Moon", "Stars"];
    const Content2_2 = "The different group of stars is known as";
    const Answers2_2 = ["Constellations"];
    const Options2_2 = ["Celestial bodies", "Asteroids", "Comet"];
    const Content2_3 = "The following constellation consists of seven main stars.";
    const Answers2_3 = ["Ursa minor"];
    const Options2_3 = ["Ursa major", "Hercules", "Lyra"];
    const Content2_4 = "The \'Pole star\' is";
    const Answers2_4 = ["North star"];
    const Options2_4 = ["South star", "East star", "West star"];
    const Content2_5 = "The sun is \_\_\_ million km away from the earth";
    const Answers2_5 = ["150"];
    const Options2_5 = ["100", "200", "250"];
    const Content2_6 = "The correct ascending order of distance of planets from sun is";
    const Answers2_6 = ["Mars, Earth, Jupiter, Saturn"];
    const Options2_6 = ["Earth, Mars, Jupiter, Saturn", "Earth, Mars, Saturn, Jupiter", "Earth, Jupiter, Mars, Saturn"];
    const Content2_7 = "The following planet is considered as \'Earth\'s-twin\'";
    const Answers2_7 = ["Venus"];
    const Options2_7 = ["Mars", "Mercury", "Saturn"];
    const Content2_8 = "The following planet is nearest to the Sun.";
    const Answers2_8 = ["Mercury"];
    const Options2_8 = ["Mars", "Venus", "Saturn"];
    const Content2_9 = "The following is called \'dwarf planet\'";
    const Answers2_9 = ["Pluto"];
    const Options2_9 = ["Saturn", "Jupiter", "Mars"];
    const Content2_10 = "The following planet is known as blue planet.";
    const Answers2_10 = ["Earth"];
    const Options2_10 = ["Mars", "Mercury", "Venus"];
    const Content2_11 = "The diameter of Moon is \_\_\_ that of the earth.";
    const Answers2_11 = ["1/4"];
    const Options2_11 = ["1/2", "1/3", "2/3"];
    const Content2_12 = "The majority of asteroids are found between the orbits of";
    const Answers2_12 = ["Mars and Jupiter"];
    const Options2_12 = ["Earth and Mars", "Jupiter and Saturn", "Saturn and Uranus"];
    const Content2_13 = "First human to travel into space";
    const Answers2_13 = ["Yuri Gagarin"];
    const Options2_13 = ["Alan Shepard", "Neil Armstrong", "Vladimir Komarov"];
    const Content2_14 = "First moon landing mission was launched by";
    const Answers2_14 = ["USA"];
    const Options2_14 = ["USSR", "China", "France"];
    const Content2_15 = "First spacewalk by living being";
    const Answers2_15 = ["Aleksei Leonov"];
    const Options2_15 = ["Yuri Gagarin", "Neil Armstrong", "Alan Shepard"];
    const Content2_16 = "The first US person launched into space";
    const Answers2_16 = ["Alan Shepard"];
    const Options2_16 = ["Neil Armstrong", "John Glenn", "Yuri Gagarin"];
    const Content2_17 = "The first satellite of United States";
    const Answers2_17 = ["Explorer 1"];
    const Options2_17 = ["Viking 1", "Voyager 1", "Mariner 1"];
    const Content2_18 = "The following is not NASA space shuttle.";
    const Answers2_18 = ["Fortuner"];
    const Options2_18 = ["Discovery", "Endeavour", "Challenger"];
    const Content2_19 = "The first flight of the space shuttle program by NASA was launched in";
    const Answers2_19 = ["1981"];
    const Options2_19 = ["1979", "1980", "1982"];
    const Content2_20 = "The observation of objects in space, known as";
    const Answers2_20 = ["Astronomy"];
    const Options2_20 = ["Telescopy", "Space exploration", "Meterology"];

    const content2 = [  Content2_1, Content2_2, Content2_3, Content2_4, Content2_5,
                        Content2_6, Content2_7, Content2_8, Content2_9, Content2_10,
                        Content2_11, Content2_12, Content2_13, Content2_14, Content2_15,
                        Content2_16, Content2_17, Content2_18, Content2_19, Content2_20
                    ]
    const answer2 = [   Answers2_1, Answers2_2, Answers2_3, Answers2_4, Answers2_5,
                        Answers2_6, Answers2_7, Answers2_8, Answers2_9, Answers2_10,
                        Answers2_11, Answers2_12, Answers2_13, Answers2_14, Answers2_15,
                        Answers2_16, Answers2_17, Answers2_18, Answers2_19, Answers2_20
                    ]
    const option2 = [   Options2_1, Options2_2, Options2_3, Options2_4, Options2_5,
                        Options2_6, Options2_7, Options2_8, Options2_9, Options2_10,
                        Options2_11, Options2_12, Options2_13, Options2_14, Options2_15,
                        Options2_16, Options2_17, Options2_18, Options2_19, Options2_20
                    ]
    for(let i = 0; i < content2.length; i = i+1){
        await QUES.createQuestion(creator_2._id, 
            content2[i], 
            answer2[i], 
            option2[i] );
    }
    console.log(`creator2 is finished.`)

    ///////////////////////Question Create PART///////////////////////
    /////////////For creator_3: Mozart////////////////
    const Content3_1 = "The plan or pattern for creating a piece of music is called";
    const Answers3_1 = ["form"];
    const Options3_1 = ["harmony", "rhythm", "melody"];
    const Content3_2 = "Johann Sebastian Bach\'s last completed work was a chorale prelude for which instrument?";
    const Answers3_2 = ["Organ"];
    const Options3_2 = ["Flute", "Violin", "Harp"];
    const Content3_3 = "Water Music by George Frideric Handel premiered on 17 July 1717 after King George I had requested a concert where?";
    const Answers3_3 = ["River Thames"];
    const Options3_3 = ["Tower of London", "Royal Opera House", "St Paul's Cathedral"];
    const Content3_4 = "Which of the following operas was composed by Wolfgang Amadeus Mozart in 1791?";
    const Answers3_4 = ["The Magic Flute"];
    const Options3_4 = ["Così fan tutte", "The Marriage of Figaro", "Don Giovanni"];
    const Content3_5 = "Who played Ludwig van Beethoven in the 1994 film entitled Immortal Beloved?";
    const Answers3_5 = ["Gary Oldman"];
    const Options3_5 = ["Liam Neeson", "Jeremy Irons", "Tom Hanks"];
    const Content3_6 = "The element that is the main idea of a piece of music is";
    const Answers3_6 = ["melody"];
    const Options3_6 = ["rhythm", "harmony", "form"];
    const Content3_7 = "The element that describes the length of sounds is";
    const Answers3_7 = ["rhythm"];
    const Options3_7 = ["form", "melody", "harmony"];
    const Content3_8 = "In Antonio Vivaldi's The Four Seasons, what is Summer often called?";
    const Answers3_8 = ["Storm"];
    const Options3_8 = ["Shimmer", "Heatwave", "Downpour"];
    const Content3_9 = "In what key is the \'Unfinished Symphony\' by Franz Schubert?";
    const Answers3_9 = ["B minor"];
    const Options3_9 = ["A major", "A minor", "B major"];
    const Content3_10 = "Which of the following musical terms is used to describe music that is soft in volume?";
    const Answers3_10 = ["Piano"];
    const Options3_10 = ["Allegro", "Legato", "Forte"];
    const Content3_11 = "A student just sang a passage of music that was connected and smooth in articulation. This is known as what musical term?";
    const Answers3_11 = ["Legato"];
    const Options3_11 = ["Allargano", "Staccato", "Forte"];
    const Content3_12 = "Which of the following musical terms is used to describe the tempo of music?";
    const Answers3_12 = ["Adagio"];
    const Options3_12 = ["Mezzo Piano", "Pizzicato", "Arco"];
    const Content3_13 = "Which of the following does not indicate loud to soft?";
    const Answers3_13 = ["incalzando"];
    const Options3_13 = ["fp", "descrescendo", "sub. pp"];
    const Content3_14 = "In 1955, Patsy Cline signed to which record label?";
    const Answers3_14 = ["Four Star Records"];
    const Options3_14 = ["Three Star Records", "Two Star Records", "One Star Records"];
    const Content3_15 = "What does Willie Nelson call his guitar?";
    const Answers3_15 = ["Trigger"];
    const Options3_15 = ["Champion", "Silver", "Black Beauty"];
    const Content3_16 = "the numbers that measure music are called";
    const Answers3_16 = ["time signature"];
    const Options3_16 = ["autograph", "parent signature", "the musical equation"];
    const Content3_17 = "a dot after a note means";
    const Answers3_17 = ["add half the value of the note to the note"];
    const Options3_17 = ["a fly pooped there", "double the value of the note", "play the note twice"];
    const Content3_18 = "a treble clef tells us which line is";
    const Answers3_18 = ["G"];
    const Options3_18 = ["B", "C", "A"];
    const Content3_19 = "The time signature 4/4 is also know as";
    const Answers3_19 = ["Common Time"];
    const Options3_19 = ["Meal Time", "Musical Time", "Cut Time"];
    const Content3_20 = "How many eighth notes equal one quarter note";
    const Answers3_20 = ["2"];
    const Options3_20 = ["4", "6", "8"];

    const content3 = [  Content3_1, Content3_2, Content3_3, Content3_4, Content3_5,
                        Content3_6, Content3_7, Content3_8, Content3_9, Content3_10,
                        Content3_11, Content3_12, Content3_13, Content3_14, Content3_15,
                        Content3_16, Content3_17, Content3_18, Content3_19, Content3_20
                    ]
    const answer3 = [   Answers3_1, Answers3_2, Answers3_3, Answers3_4, Answers3_5,
                        Answers3_6, Answers3_7, Answers3_8, Answers3_9, Answers3_10,
                        Answers3_11, Answers3_12, Answers3_13, Answers3_14, Answers3_15,
                        Answers3_16, Answers3_17, Answers3_18, Answers3_19, Answers3_20
                    ]
    const option3 = [   Options3_1, Options3_2, Options3_3, Options3_4, Options3_5,
                        Options3_6, Options3_7, Options3_8, Options3_9, Options3_10,
                        Options3_11, Options3_12, Options3_13, Options3_14, Options3_15,
                        Options3_16, Options3_17, Options3_18, Options3_19, Options3_20
                    ]
    for(let i = 0; i < content3.length; i = i+1){
        await QUES.createQuestion(creator_3._id, 
            content3[i], 
            answer3[i], 
            option3[i] );
    }
    console.log(`creator3 is finished.`)

    ///////////////////////Question Create PART///////////////////////
    /////////////For creator_4: Darwin////////////////
    const Content4_1 = "Which is the world\'s leading egg\-producing country?";
    const Answers4_1 = ["China"];
    const Options4_1 = ["India", "Japan", "Malaysia"];
    const Content4_2 = "What is the most important part of an egg called?";
    const Answers4_2 = ["Germ"];
    const Options4_2 = ["Shell membrane", "Yolk", "White"];
    const Content4_3 = "Which living bird lays the world\'s smallest egg?";
    const Answers4_3 = ["Bee Humming Bird"];
    const Options4_3 = ["Hornbill", "Gulls", "Woodpecker"];
    const Content4_4 = "What is the gestation period of an African elephant?";
    const Answers4_4 = ["Twenty one months"];
    const Options4_4 = ["One year", "Six months", "Nine months"];
    const Content4_5 = "Which bird\'s eye are larger than its brain?";
    const Answers4_5 = ["Ostrich"];
    const Options4_5 = ["Eagle", "Owl", "Parrot"];
    const Content4_6 = "How many different types of animals are there in the world?";
    const Answers4_6 = ["1.5 million"];
    const Options4_6 = ["12000", "1000", "82"];
    const Content4_7 = "What family was the giant panda a member of before its classification was changed?";
    const Answers4_7 = ["Raccoon"];
    const Options4_7 = ["Horse", "Cat", "Dog"];
    const Content4_8 = "What do you call animals that only eat plants?";
    const Answers4_8 = ["Herbivores"];
    const Options4_8 = ["Carnivores", "Omnivores", "Vegetarians"];
    const Content4_9 = "Which of the following birds has only two toes?";
    const Answers4_9 = ["Ostrich"];
    const Options4_9 = ["Cardinal", "Finch", "Robin"];
    const Content4_10 = "At about what age does a puppy get his complete set of baby or puppy teeth?";
    const Answers4_10 = ["1 month"];
    const Options4_10 = ["6 months", "4 months", "3 months"];
    const Content4_11 = "How many claws does a house cat have?";
    const Answers4_11 = ["18"];
    const Options4_11 = ["19", "20", "14"];
    const Content4_12 = "Which of the following is not a bird commonly found at feeders?";
    const Answers4_12 = ["American Avocet"];
    const Options4_12 = ["Dark\-eyed Junco", "Black\-capped Chickadee", "Carolina Wren"];
    const Content4_13 = "The polar bear\'s scientific name is ursus maritimus. What does that mean?";
    const Answers4_13 = ["Sea Bear"];
    const Options4_13 = ["White Bear", "Ice Bear", "Brown Bear"];
    const Content4_14 = "About how many species of birds are there?";
    const Answers4_14 = ["Over 9000 "];
    const Options4_14 = ["Over 50000 ", "Over 100000", "Over 20000"];
    const Content4_15 = "Approximately how many Grizzly bears are there in North America?";
    const Answers4_15 = ["150000"];
    const Options4_15 = ["150", "1500", "15000"];
    const Content4_16 = "Which is the Tallest dog (breed)?";
    const Answers4_16 = ["Great Dane"];
    const Options4_16 = ["Dalmatian", "Greyhound", "Dobberman"];
    const Content4_17 = "Which is the Heaviest dog (breed)?";
    const Answers4_17 = ["English Mastiff or St. Bernard"];
    const Options4_17 = ["German Shepherd", "Irish Wolfhound", "Bull Dog"];
    const Content4_18 = "What is another name for a Pigeon?";
    const Answers4_18 = ["Rock Dove"];
    const Options4_18 = ["Common Dove", "City Dove", "It has no other name"];
    const Content4_19 = "Where do you find tigers?";
    const Answers4_19 = ["Asia"];
    const Options4_19 = ["Africa", "South America", "Australia"];
    const Content4_20 = "Which is the Fastest marine animal?";
    const Answers4_20 = ["Killer Whale"];
    const Options4_20 = ["Squid", "Sperm Whale", "Shark"];

    const content4 = [  Content4_1, Content4_2, Content4_3, Content4_4, Content4_5,
                        Content4_6, Content4_7, Content4_8, Content4_9, Content4_10,
                        Content4_11, Content4_12, Content4_13, Content4_14, Content4_15,
                        Content4_16, Content4_17, Content4_18, Content4_19, Content4_20
                    ]
    const answer4 = [   Answers4_1, Answers4_2, Answers4_3, Answers4_4, Answers4_5,
                        Answers4_6, Answers4_7, Answers4_8, Answers4_9, Answers4_10,
                        Answers4_11, Answers4_12, Answers4_13, Answers4_14, Answers4_15,
                        Answers4_16, Answers4_17, Answers4_18, Answers4_19, Answers4_20
                    ]
    const option4 = [   Options4_1, Options4_2, Options4_3, Options4_4, Options4_5,
                        Options4_6, Options4_7, Options4_8, Options4_9, Options4_10,
                        Options4_11, Options4_12, Options4_13, Options4_14, Options4_15,
                        Options4_16, Options4_17, Options4_18, Options4_19, Options4_20
                    ]
    for(let i = 0; i < content4.length; i = i+1){
        await QUES.createQuestion(creator_4._id, 
            content4[i], 
            answer4[i], 
            option4[i] );
    }
    console.log(`creator4 is finished.`)

    ///////////////////////Question Create PART///////////////////////
    /////////////For creator_5: Van Gogh////////////////
    const Content5_1 = "Whose function is to make the paint thin so that it can be easily applied on the surface?";
    const Answers5_1 = ["Solvent"];
    const Options5_1 = ["Pigment", "Carrier", "Base"];
    const Content5_2 = "\_\_\_\_ is suspended in either quick drying spirit varnish or slow drying oil varnish as per requirement.";
    const Answers5_2 = ["Aluminium paint"];
    const Options5_2 = ["Anti\-corrosive paint", "Asbestos paint", "Cellulose paint"];
    const Content5_3 = "\_\_\_\_ is the most reactive of drier metals and is generally regarded as a surface drier.";
    const Answers5_3 = ["Cobalt"];
    const Options5_3 = ["Litharge", "Red lead", "Magnesium"];
    const Content5_4 = " The sulphate of \_\_\_\_ is used with zinc paint so as to eliminate the risk of discoloration of a lead drier.";
    const Answers5_4 = ["Manganese"];
    const Options5_4 = ["Magnesium", "Potassium", "Calcium"];
    const Content5_5 = "The \_\_\_\_ is inflammable, evaporates rapidly and dries the oil consequently.";
    const Answers5_5 = ["Turpentine"];
    const Options5_5 = ["Distemper", "Linseed oil", "Linseed oil"];
    const Content5_6 = "\_\_\_\_ is prepared by dissolving Asphalt or mineral pitches or Vegetable bitumen in any type of oil or Petroleum.";
    const Answers5_6 = ["Bituminous paint"];
    const Options5_6 = ["Asbestos paint", "Cement paint", "Colloidal paint"];
    const Content5_7 = "Which of the following best describes the difference between abstract expressionism and minimalism in modern art?";
    const Answers5_7 = ["Abstract expressionism is focused on the painter's emotions, while minimalism is focused on the essence of the object being painted."];
    const Options5_7 = ["Abstract expressionism is focused on painting an object with only one layer, while minimalism is intended to provide detail and layers.", 
                        "Abstract expressionism is focused on removing the painter's emotions from the art, while minimalism is focused on realistic painting.", 
                        "Abstract expressionism is focused on making the audience feel something particular about an object, while minimalism portrays how the artist feels."];
    const Content5_8 = "Jean Antoine Watteau is credited with bringing the Rococo style from architecture into painting, creating whimsical looks through the use of soft colors and \_\_\_\_.";
    const Answers5_8 = ["asymmetry"];
    const Options5_8 = ["shadowing", "reflectivity", "angles"];
    const Content5_9 = "What does the existence of prehistoric art indicate about the lives of prehistoric people and their lives?";
    const Answers5_9 = ["Prehistoric people valued artistic depictions and color for aesthetic purposes."];
    const Options5_9 = ["Prehistoric people did not understand how to create attractive artwork.", "Prehistoric people only created art for the purposes of record\-keeping.", "Prehistoric people primarily communicated with each other through their art."];
    const Content5_10 = "Frank Buffalo Hyde's Amerindian artwork often depicts white people dressed up in Native American headdresses and clothing, as well as Hollywood's use of Native American culture in films. Which of the following best describes the purpose of these depictions in his artwork?";
    const Answers5_10 = ["To critique the mainstream cultural appropriation of Native American culture"];
    const Options5_10 = ["To raise awareness of the needs and tragedies of Native American communities", "To represent traditional Native American culture in a modern American way", "To indicate that all people regardless of race are, in essence, the same"];
    const Content5_11 = "The Macedonian Empire\'s conquering of the Mediterranean region affected Greek art in which of the following ways?";
    const Answers5_11 = ["Increased depiction of defeated armies and exiles"];
    const Options5_11 = ["Increased depiction of heroes and battle victories", "Increased rigidity in terms of lines and angles", "Increased depiction of the gods and goddesses"];
    const Content5_12 = "Which of the following artists is generally considered the last major painter of the International Gothic style?";
    const Answers5_12 = ["Gentile da Fabriano"];
    const Options5_12 = ["Piero della Francesca", "Leonardo da Vinci", "Andrea del Sarto"];
    const Content5_13 = "Etruscan tombs had reliefs with depictions of cooking utensils, farm equipment, and other everyday objects. Which of the following best describes the reason for this type of artwork?";
    const Answers5_13 = ["Creating dwelling places for the dead"];
    const Options5_13 = ["Recalling the difficulty of everyday life", "Reminding the dead of their loved ones", "Preparing for gods to visit the dead"];
    const Content5_14 = "In ancient Egyptian artwork, which period was characterized by a movement toward depicting family scenes, elongating the fingers and heads of figures, and depicting figures of both sexes with hips and breasts?";
    const Answers5_14 = ["Amarna Period"];
    const Options5_14 = ["Pre\-Dynastic Period", "Middle Kingdom", "Ptolemaic Period"];
    const Content5_15 = "In Marcel Duchamp\'s artwork, what distinguished an everyday object from his ready\-made art?";
    const Answers5_15 = ["Addition of text"];
    const Options5_15 = ["Elimination of color", "Inclusion of pictures", "Carvings of animals"];
    const Content5_16 = "What was the main purpose of the ichthys in early Christian artwork?";
    const Answers5_16 = ["To be a secret symbol of early Christianity"];
    const Options5_16 = ["To mark the graves of buried Jewish patriarchs", "To symbolize the need for spiritual versus physical food", "To represent the miracle of the loaves and fishes"];
    const Content5_17 = "Romantic artistists were fascinates by:";
    const Answers5_17 = ["Passions and inner struggles"];
    const Options5_17 = ["Eternal values and heroes", "Social classes and ideal images", "inner feelings and ordinary events"];
    const Content5_18 = "Romanticism was an art movement that emphasized a revolution against:";
    const Answers5_18 = ["social order and religion"];
    const Options5_18 = ["ideal matters and promotions", "excesses and eccentric redundancy", "urban themes and patriotic themes"];
    const Content5_19 = "The \_\_\_\_ artists investigated about the medieval era as well as the folk culture.";
    const Answers5_19 = ["Romantic"];
    const Options5_19 = ["Neoclassical", "Realist", "Baroque"];
    const Content5_20 = "The painters of this school announce the advent of the naturalism and impressionism.";
    const Answers5_20 = ["Realism"];
    const Options5_20 = ["Romanticism", "Renaissance", "Baroque"];

    const content5 = [  Content5_1, Content5_2, Content5_3, Content5_4, Content5_5,
                        Content5_6, Content5_7, Content5_8, Content5_9, Content5_10,
                        Content5_11, Content5_12, Content5_13, Content5_14, Content5_15,
                        Content5_16, Content5_17, Content5_18, Content5_19, Content5_20
                    ]
    const answer5 = [   Answers5_1, Answers5_2, Answers5_3, Answers5_4, Answers5_5,
                        Answers5_6, Answers5_7, Answers5_8, Answers5_9, Answers5_10,
                        Answers5_11, Answers5_12, Answers5_13, Answers5_14, Answers5_15,
                        Answers5_16, Answers5_17, Answers5_18, Answers5_19, Answers5_20
                    ]
    const option5 = [   Options5_1, Options5_2, Options5_3, Options5_4, Options5_5,
                        Options5_6, Options5_7, Options5_8, Options5_9, Options5_10,
                        Options5_11, Options5_12, Options5_13, Options5_14, Options5_15,
                        Options5_16, Options5_17, Options5_18, Options5_19, Options5_20
                    ]
    for(let i = 0; i < content5.length; i = i+1){
        await QUES.createQuestion(creator_5._id, 
            content5[i], 
            answer5[i], 
            option5[i] );
    }
    console.log(`creator5 is finished.`)



    console.log(`SEEDING DONE.`)
    await db.serverConfig.close();

}


main()