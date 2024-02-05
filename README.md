# GMDb: A Node.js Module for MongoDB Interactions

## Overview

GMDb simplifies common MongoDB operations within Node.js applications, providing a streamlined interface for tasks like:

Finding documents
Finding single documents
Updating documents
Inserting documents
Sorting, skipping, and limiting results
Counting documents
## Installation

Install the module using npm or yarn:

```bash
npm install gmdb
```
Use code with caution. Learn more
## Usage

Import the module:
```JavaScript
const GMDb = require('gmdb');
```
Use code with caution. Learn more


Create a new instance:
```JavaScript
const db = new GMDb('your_mongodb_connection_url');
```

Use code with caution. Learn more
Perform operations:
```JavaScript
// Find documents
const results = await db.find('myDatabase', 'myCollection', { name: 'John' });

// Find a single document
const document = await db.findone('myDatabase', 'myCollection', { age: 30 });

// Update a document
const updateResult = await db.updateOne('myDatabase', 'myCollection', { name: 'John' }, { $set: { age: 35 } });

// Insert a document
const insertResult = await db.insertOne('myDatabase', 'myCollection', { name: 'Alice', age: 25 });

// Find with sorting, skipping, and limiting
const sortedResults = await db.findSortSkipLimit('myDatabase', 'myCollection', {}, { age: 1 }, 5, 10);

// Count documents
const count = await db.countOfData('myDatabase', 'myCollection', {});
```

Use code with caution. Learn more
## Examples

(Provide code examples demonstrating typical usage scenarios)

## API Reference

(List and describe the module's methods and properties)

## Contributing

(Guidelines for contributing to the module's development)

## License