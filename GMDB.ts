import { MongoClient, ObjectId, CollectionOptions } from "mongodb";

class GMDb {
  private client: MongoClient;

  constructor(url: string) {
    this.client = new MongoClient(url);
    this.client.connect();
  }

  find = async function (dbName: string, collectionName: string, searchObj: any, serachCondition?: any, projection?: any) {
    const db = this.client.db(dbName);
    const collection = db.collection(collectionName);
    let filteredDocs: any[];
    if (projection) {
      filteredDocs = await collection.find(searchObj, serachCondition).project(projection).toArray();
    } else {
      filteredDocs = await collection.find(searchObj, serachCondition).toArray();
    }
    return filteredDocs;
  };

  findOne = async function (dbName: string, collectionName: string, searchObj: any) {
    const db = this.client.db(dbName);
    const collection = db.collection(collectionName);
    const foundDoc = await collection.findOne(searchObj);
    return foundDoc;
  };

  updateOne = async function (dbName: string, collectionName: string, searchObj: any, updateObj: any) {
    const db = this.client.db(dbName);
    const collection = db.collection(collectionName);
    const updateResult = await collection.updateOne(searchObj, {
      $set: updateObj,
    });
    return updateResult;
  };

  insertOne = async function (dbName: string, collectionName: string, insertObj: any) {
    const db = this.client.db(dbName);
    const collection = db.collection(collectionName);
    const insertResult = await collection.insertOne(insertObj);
    return insertResult;
  };

  deleteOne = async function (dbName: string, collectionName: string, searchObj: any) {
    const db = this.client.db(dbName);
    const collection = db.collection(collectionName);
    const foundDoc = await collection.deleteOne(searchObj);
    return foundDoc;
  };

  findSortSkipLimit = async function (dbName: string, collectionName: string, searchObj: any, sortObj: any, skipIndex: number, limitCount: number) {
    const db = this.client.db(dbName);
    const collection = db.collection(collectionName);
    const filteredDocs = await collection.find(searchObj).sort(sortObj).skip(skipIndex).limit(limitCount).toArray();
    return filteredDocs;
  };

  countOfData = async function (dbName: string, collectionName: string, searchObj: any) {
    const db = this.client.db(dbName);
    const collection = db.collection(collectionName);
    const count = await collection.countDocuments(searchObj);
    return count;
  };

  createIndex = async function (dbName: string, collectionName: string, fields: any, options?: CollectionOptions) {
    const db = this.client.db(dbName);
    const collection = db.collection(collectionName);
    const createResult = await collection.createIndex(fields, options);
    return createResult;
  };
}

export { GMDb, ObjectId };
