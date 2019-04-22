const mongoCollections = require("./config/mongoCollections");
const candidates = mongoCollections.candidates;
const { ObjectId } = require('mongodb');
const CHK = require('./dataCHK/checkers.js');

async function registar(name, password){
    
    CHK.CHKstring(name);
    CHK.CHKstring(password);

    if (!name) throw "Please provide a valid user name.";
    if (!password) throw "Please provide a valid password.";

  const candidatesCollection = await candidates();
  //const postsCollection = await posts();

  let newId = new ObjectId();

  let newUser = {
    _id: newId,
    name: name,
    password: password//,
    //quizRecords: []
  };

  const insertInfo = await candidatesCollection.insertOne(newUser);
  if (insertInfo.insertedCount === 0) throw "Could not add user";

  return newUser;
}

// registar("Duke","horse").then(result => console.log(result));

async function login(name, password){
    
    CHK.CHKstring(name);
    CHK.CHKstring(password);

    if (!name) throw "Please provide a valid user name.";
    if (!password) throw "Please provide a valid password.";

    const candidatesCollection = await candidates();

    const user = await candidatesCollection.findOne({ name: name, password: password });
    if (user === null) throw "Wrong User name or Password.";

    return user;
}

// login("Duke","hore").then(result => console.log(result));
async function infoUpdate(id, OldPassword, NewPassword){

    let newid = CHK.checkObjectId(id);
    if (!newid) throw "You must provide an id to search for";

    CHK.CHKstring(OldPassword);
    CHK.CHKstring(NewPassword);

    if (!OldPassword) throw "Please provide your password.";
    if (!NewPassword) throw "Please provide your new password.";

    if(OldPassword === NewPassword) throw "Please provide a different new password.";

    const candidatesCollection = await candidates();

    const user = await candidatesCollection.findOne({ _id: newid, password: OldPassword });
    if (user === null) throw "Wrong Former Password.";

    const updateResult = await candidatesCollection.findOneAndUpdate(
        { _id: newid },
        { $set: {password: NewPassword} },
        { returnOriginal: false }
    );
    if (!updateResult.ok) {
        throw `Mongo was unable to update the user: ${newid}`;
    }

    return await getById(id);
}
//infoUpdate("5cb765e4291d400f38c1e08d", "hokre","hokre").then(result => console.log(result));

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