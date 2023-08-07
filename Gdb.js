const MongoClient = require("mongodb").MongoClient;
class GDb {
  constructor(url) {
    this.client = new MongoClient(url);
    this.client.connect();
  }
  find = async function (dbName, collectionName, searchObj,serachCondition) {
    const db = this.client.db(dbName);
    const collection = db.collection(collectionName);
    const filteredDocs = await collection.find(searchObj,serachCondition).toArray();
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
}
module.exports = GDb;
