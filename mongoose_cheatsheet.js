// Пример использования метода "where" в Mongoose для поиска документов, удовлетворяющих условию:

`
const User = mongoose.model('User', userSchema);

User.where('age').gte(18).exec((err, users) => {
  if (err) {
    console.error(err);
  } else {
    console.log(users);
  }
});
` // Пример использования метода "all" в Mongoose для поиска документов, у которых массив содержит все указанные элементы:
`
const Post = mongoose.model('Post', postSchema);

Post.find().all('tags', ['javascript', 'mongodb']).exec((err, posts) => {
  if (err) {
    console.error(err);
  } else {
    console.log(posts);
  }
});
` // Пример использования метода "count" в Mongoose для подсчета документов, удовлетворяющих условию:
`
const Product = mongoose.model('Product', productSchema);

Product.count({ price: { $gte: 10 } }, (err, count) => {
  if (err) {
    console.error(err);
  } else {
    console.log(Count: ${count});
  }
});
` // Пример использования метода "distinct" в Mongoose для получения уникальных значений определенного поля:
`
const Product = mongoose.model('Product', productSchema);

Product.distinct('category', (err, categories) => {
  if (err) {
    console.error(err);
  } else {
    console.log(categories);
  }
});
` // Пример использования метода "elemMatch" в Mongoose для поиска документов, у которых массив содержит объекты, удовлетворяющие определенным условиям:
`
const User = mongoose.model('User', userSchema);

User.find().elemMatch('comments', { author: 'John', rating: { $gte: 4 } }).exec((err, users) => {
  if (err) {
    console.error(err);
  } else {
    console.log(users);
  }
});
` // Пример использования метода "equals" в Mongoose для поиска документа с определенным значением поля:
`
const User = mongoose.model('User', userSchema);

User.findOne({ _id: mongoose.Types.ObjectId('6046cd012bf879001c39b3f8') }, (err, user) => {
  if (err) {
    console.error(err);
  } else {
    console.log(user);
  }
});
`;

// `exec` - To execute the query and return a Promise:

```javascript
const result = await MyModel.find({}).exec();
```// `exists` - To check if documents exist based on the query:

```javascript
const exists = await MyModel.exists({ name: 'John' });
```// `find` - To find documents based on a query:

```javascript
const result = await MyModel.find({ age: { $gt: 18 } });
```// `findOne` - To find a single document based on a query:

```javascript
const user = await UserModel.findOne({ email: 'example@email.com' });
```// `findOneAndRemove` - To find and remove a single document based on a query:

```javascript
const result = await UserModel.findOneAndRemove({ _id: '1234567890' });
```// `gt` - Greater than query:

```javascript
const result = await MyModel.find({ age: { $gt: 25 } });
```// `gte` - Greater than or equal to query:

```javascript
const result = await MyModel.find({ age: { $gte: 18 } });
```// `hint` - To force the query to use a specific index:

```javascript
const result = await MyModel.find({}).hint({ age: 1 });
```// `in` - To find documents where a field value matches any value in an array:

```javascript
const result = await MyModel.find({ status: { $in: ['active', 'pending'] } });
```// `lean` - To get plain JavaScript objects instead of Mongoose documents:

```javascript
const result = await MyModel.find({}).lean();
```// `limit` - To limit the number of documents returned:

```javascript
const result = await MyModel.find({}).limit(10);
```// `lt` - Less than query:

```javascript
const result = await MyModel.find({ age: { $lt: 30 } });
```// `lte` - Less than or equal to query:

```javascript
const result = await MyModel.find({ age: { $lte: 50 } });
```// `maxScan` - To limit the number of documents to scan:

```javascript
const result = await MyModel.find({}).maxScan(100);
```// `merge` - To merge multiple query objects:

```javascript
const query1 = MyModel.find({ age: { $gte: 18 } });
const query2 = MyModel.find({ status: 'active' });
const mergedQuery = query1.merge(query2);
const result = await mergedQuery.exec();
```// `mod` - To find documents where a field's value modulo another value:

```javascript
const result = await MyModel.find({ count: { $mod: [2, 0] } });
```//`ne` - Not equal to query:

```javascript
const result = await MyModel.find({ status: { $ne: 'archived' } });
```// `nin` - Not in query:

```javascript
const result = await MyModel.find({ status: { $nin: ['archived', 'deleted'] } });
```// `nor` - Logical NOR query:

```javascript
const result = await MyModel.find({
  $nor: [{ status: 'archived' }, { status: 'deleted' }],
});
```// `or` - Logical OR query:

```javascript
const result = await MyModel.find({
  $or: [{ status: 'active' }, { age: { $lt: 18 } }],
});
```// `populate` - To populate reference fields with actual documents:

```javascript
const user = await OrderModel.findOne({}).populate('user');
```// `read` - To set read preference for the query:

```javascript
const result = await MyModel.find({}).read('secondary');
```// `regex` - To use regular expressions in the query:

```javascript
const result = await MyModel.find({ name: /John/i });
```// `remove` - To remove documents based on a query:

```javascript
const result = await MyModel.remove({ age: { $lt: 18 } });
```// `select` - To select specific fields in the query result:

```javascript
const result = await MyModel.find({}).select('name age');
```// `setOptions` - To set additional query options:

```javascript
const result = await MyModel.find({}).setOptions({ maxTimeMS: 1000 });
```// `size` - To find documents with an array field of a specific size:

```javascript
const result = await MyModel.find({ hobbies: { $size: 3 } });
```// `skip` - To skip a number of documents:

```javascript
const result = await MyModel.find({}).skip(5);
```// `slice` - To retrieve a subset of an array field:

```javascript
const result = await MyModel.find({}).slice('comments', 5);
```// `snapshot` - To use snapshot read preference for the query:

```javascript
const result = await MyModel.find({}).snapshot(true);
```// `sort` - To sort the query result:

```javascript
const result = await MyModel.find({}).sort({ name: 1 });
```// `stream` - To get a stream of documents:

```javascript
const stream = MyModel.find({}).stream();
stream.on('data', (doc) => {
  console.log(doc);
});
```// `tailable` - To create a tailable cursor for capped collections:

```javascript
const cursor = MyModel.find({}).tailable().cursor();
```// `toConstructor` - To convert a query object to a constructor function:

```javascript
const queryObj = MyModel.find({ age: { $gte: 18 } });
const QueryConstructor = queryObj.toConstructor();
const result = new QueryConstructor();
```// `update` - To update documents based on a query:

```javascript
const result = await MyModel.updateMany({ status: 'pending' }, { status: 'completed' });
```;
