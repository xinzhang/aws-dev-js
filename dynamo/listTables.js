var AWS = require('aws-sdk');

AWS.config.update({region: 'ap-southeast-2'});

var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

ddb.listTables( {Limit:20}, (err,data) => {
  if (err) {
    console.log("Error", err.code);
  } else {
    console.log("Table names are ", data.TableNames);
  }
})