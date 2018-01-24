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

database.query(query, params)
  .then(function (rows) {
    console.dir(rows);
    database.close();
  });
```
