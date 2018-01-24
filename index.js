var mysql   = require('mysql');
var Promise = require('bluebird');

var Database = function (config) {
  var init = function ( config ) {
    this.connection = mysql.createConnection( config );
  }

  this.query = function ( sql, args ) {
    return new Promise( ( resolve, reject ) => {
      this.connection.query( sql, args, ( err, rows ) => {
        if ( err )
          return reject( err );
        resolve( rows );
      } );
    });
  }
  this.startTransaction = function () {
      return this.query('start transaction');
  }
  this.commit = function () {
      return this.query('commit');
  }
  this.rollback = function () {
      return this.query('rollback');
  }
  this.close = function() {
    return new Promise( ( resolve, reject ) => {
      this.connection.end( err => {
        if ( err )
          return reject( err );
        resolve();
      } );
    } );
  }

  init(config);
  return this;
};


module.exports = Database;
