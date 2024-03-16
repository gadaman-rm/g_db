const { MongoClient, ObjectId } = require("mongodb");
class GMDb {
  constructor(url) {
    this.client = new MongoClient(url);
    this.client.connect();
  }
  find = async function (dbName, collectionName, searchObj, serachCondition, projection) {
    const db = this.client.db(dbName);
    const collection = db.collection(collectionName);
    let filteredDocs;
    if (projection)
      filteredDocs = await collection.find(searchObj, serachCondition).project(projection).toArray();
    else
      filteredDocs = await collection.find(searchObj, serachCondition).toArray();
    return filteredDocs;
  };
  findone = async function (dbName, collectionName, searchObj) {
    const db = this.client.db(dbName);
    const collection = db.collection(collectionName);
    const foundDoc = await collection.findOne(searchObj);
    return foundDoc;
  };
  updateOne = async function (dbName, collectionName, searchObj, updateObj) {
    const db = this.client.db(dbName);
    const collection = db.collection(collectionName);
    const updateResult = await collection.updateOne(searchObj, {
      $set: updateObj,
    });
    return updateResult;
  };
  insertOne = async function (dbName, collectionName, inserObj) {
    const db = this.client.db(dbName);
    const collection = db.collection(collectionName);
    const insertResult = await collection.insertOne(inserObj);
    return insertResult;
  };
  deleteOne = async function (dbName, collectionName, searchObj) {
    const db = this.client.db(dbName);
    const collection = db.collection(collectionName);
    const foundDoc = await collection.deleteOne(searchObj);
    return foundDoc;
  };
  findSortSkipLimit = async function (dbName, collectionName, searchObj, sortObj, skipIndex, limitCount) {
    const db = this.client.db(dbName);
    const collection = db.collection(collectionName);
    const filteredDocs = await collection.find(searchObj).sort(sortObj).skip(skipIndex).limit(limitCount).toArray();
    return filteredDocs;
  };
  countOfData = async function (dbName, collectionName, searchObj) {
    const db = this.client.db(dbName);
    const collection = db.collection(collectionName);
    const count = await collection.count(searchObj);
    return count;
  };
  createIndex = async function (dbName, collectionName, fields, options) {
    const db = this.client.db(dbName);
    const collection = db.collection(collectionName);
    const createResult = await collection.createIndex(fields, options);
    return createResult;
  }

}
module.exports = { GMDb, ObjectId };
