# domo-arigato-mysql
Promise based mysql wrapper for node.JS apps.

Sample Usage:
```javascript
var database = require('domo-arigato-mysql')({
  host: 'localhost',
  port: 3306,
  user: 'myUser',
  password: 'myPassword',
  database: 'myDatabaseName'
});

var query = `select 'test' from dual`;

database.startTransaction()
  .then(function() {
    return database.query(query, params);
  })
  .then(function (rows) {
    console.dir(rows);
    return database.commit();
  })
  .then(function() {
  	  return database.close();
  })
  .catch(function(err) {
    return database.rollback();
  });
```
