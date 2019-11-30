// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'ap-southeast-2'});

// Create the DynamoDB service object
var dynamo = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var params = {
  // TableName : "Movies",
  TableName : "Movies",
  KeySchema : [ {
    AttributeName : "year",
    KeyType : "HASH"
  }, // Partition key
  {
    AttributeName : "title",
    KeyType : "RANGE"
  } // Sort key
  ],
  AttributeDefinitions : [ {
    AttributeName : "year",
    AttributeType : "N"
  }, {
    AttributeName : "title",
    AttributeType : "S"
  } ],
  ProvisionedThroughput : {
    ReadCapacityUnits : 2,
    WriteCapacityUnits : 2
  }
};

// Call DynamoDB to create the table
dynamo.createTable(params, function(err, data) {
  if (err) {
    if (err.message.indexOf('Table already exists') != -1) {
      console.log('table found!');
      return;
		}
    console.log("Error", err);
  } else {
    console.log("Table Created", data);
  }
});
