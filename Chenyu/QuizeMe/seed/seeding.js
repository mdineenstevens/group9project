const DBFunc = require("../data/index");
const CAND = DBFunc.candidates;
const CREATOR = DBFunc.creators;
const QUIZ = DBFunc.quizzes;
const QUES = DBFunc.questions;

async function main() {
///////////////////////REGISTER PART///////////////////////
    const cand_1 = await CAND.registar("Hangyu Wang", "HWang2019");
    const cand_2 = await CAND.registar("Michael Dineen", "MDineen2019");
    const cand_3 = await CAND.registar("Chenyu Tian", "CTian2019");
    const cand_4 = await CAND.registar("Liam Nagel", "LNagel2019");
    console.log("//////////////////The candidates is finished//////////////////")

    const creator_1 = await CREATOR.registar("Turing", "No1ModernCS");
    const creator_2 = await CREATOR.registar("Einstein", "No1Scientist");
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



console.log(`SEEDING DONE.`)
}


main()