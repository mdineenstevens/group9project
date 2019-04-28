const mongoCollections = require("./config/mongoCollections");
const candidates = mongoCollections.candidates;
const bcrypt = require("bcrypt");
const saltRounds = 16;
const { ObjectId } = require('mongodb');
const CHK = require('./dataCHK/checkers.js');

async function registar(name, password){
    
    CHK.CHKstring(name);
    CHK.CHKstring(password);

    if (!name) throw "Please provide a valid user name.";
    if (!password) throw "Please provide a valid password.";

    const candidatesCollection = await candidates();
    const user = await candidatesCollection.findOne({ name: name });
    if (user !== null) throw "Sorry. This username is used.";

    CHK.CHKPWType(password)

    const hashedPassWord = await bcrypt.hash(password, saltRounds);
    //const postsCollection = await posts();

    let newId = new ObjectId();

    let newUser = {
        _id: newId,
        name: name,
        password: hashedPassWord//,
        //quizRecords: []
    };

    const insertInfo = await candidatesCollection.insertOne(newUser);
    if (insertInfo.insertedCount === 0) throw "Could not add user";

    return newUser;
}

// registar("Hangyu Wang","HWang2019").then(result => console.log(result));

async function login(name, password){
    
    CHK.CHKstring(name);
    CHK.CHKstring(password);

    if (!name) throw "Please provide a valid user name.";
    if (!password) throw "Please provide a valid password.";

    const candidatesCollection = await candidates();

    const user = await candidatesCollection.findOne({ name: name });
    if (user === null) throw "Please make sure your username.";

    CHK.CHKPWType(password)
    
    let cmp_password = await bcrypt.compare(password, user.password);
    if(cmp_password === true){
        return user;
    }else{
        throw `Please make sure your password.`
    }
    
}
// login("Dee","horseW1").then(result => console.log(result));

async function infoUpdate(id, OldPassword, NewPassword){

    let newid = CHK.checkObjectId(id);
    if (!newid) throw "You must provide an id to search for";

    CHK.CHKstring(OldPassword);
    CHK.CHKstring(NewPassword);

    if (!OldPassword) throw "Please provide your password.";
    if (!NewPassword) throw "Please provide your new password.";

    if(OldPassword === NewPassword) throw "Please provide a different new password.";

    const candidatesCollection = await candidates();

    const user = await candidatesCollection.findOne({ _id: newid });
    if (user === null) throw "No such user.";

    let cmp_password = await bcrypt.compare(OldPassword, user.password);
    if(cmp_password === false){
        throw `Please make sure your former passward is right.`
    }

    CHK.CHKPWType(NewPassword)
    const hashedPassWord = await bcrypt.hash(NewPassword, saltRounds);

    const updateResult = await candidatesCollection.findOneAndUpdate(
        { _id: newid },
        { $set: {password: hashedPassWord} },
        { returnOriginal: false }
    );
    if (!updateResult.ok) {
        throw `Mongo was unable to update the user: ${newid}`;
    }

    return await getById(id);
}
// infoUpdate("5cc4d6a37ce4f420b3a322f2", "horseW1","horseW3").then(result => console.log(result));

async function getById(id){

    let newid = CHK.checkObjectId(id);

    const candidatesCollection = await candidates();

    const user = await candidatesCollection.findOne({ _id: newid });
    if (user === null) throw "No user with this ID.";

    return user;
}
// getById("5cb765e4291d400f38c1e08d").then(result => console.log(result));

module.exports = {
    registar,
    login,
    infoUpdate,
    getById
}