var AWS = require('aws-sdk');
AWS.config.update({region: 'ap-southeast-2'});

var dynamo = new AWS.DynamoDB({apiVersion: '2012-08-10'});
var docClient = new AWS.DynamoDB.DocumentClient();
const tableName = "Movies";

/**
 * listItems - lists all items in the DB with year > 1950
 * 
 * @param tableName
 */
async function listItems() {
  console.log('list movies');
	var params = {
			TableName : tableName,
			ProjectionExpression : "#yr, title, info.rating",
			FilterExpression : "#yr between :start_yr and :end_yr",
			ExpressionAttributeNames : {
				"#yr" : "year",
			},
			ExpressionAttributeValues : {
				":start_yr" : 1950,
				":end_yr" : 2999
			}
	};
  
  return new Promise( (resolve, reject) => {
    docClient.scan(params, function(err, data) {
      if (err) {
        const errStr = '{"response": "Unable to query. Error: "+JSON.stringify(err, null, 2)}';
        console.error(errStr);
        reject(errStr);
      } else {
        console.log("Query succeeded.");
        resolve(data);
      }
    });
  });
};

/**
 * add_movie method - adds an item to the table
 * 
 */
async function addMovie(item) {
	var movie = JSON.parse(item);
	console.log(movie.title);
	var params = {
			TableName : tableName,
			Item : {
				"year" : parseInt(movie.year),
				"title" : movie.title,
				"info" : movie.info
			}
	
	}

  // write the item to the table
  return new Promise( (resolve, reject) => {
    docClient.put(params,
        function(err, data) {
          if (err) {
            var errStr = {
              response: "Unable to put",
              Error: JSON.stringify(err)
            };
            reject(err);					
          } else {
          	
            var params = {
                TableName : tableName,
                ProjectionExpression : "#yr, title, info.rating",
                FilterExpression : "#yr between :start_yr and :end_yr",
                ExpressionAttributeNames : {
                  "#yr" : "year",
                },
                ExpressionAttributeValues : {
                  ":start_yr" : 1950,
                  ":end_yr" : 2999
                }
            }

            // confirm addition of the item
            docClient.scan(params, function(err, data, context) {
                  if (err) {
                    const errStr = '{"response": "Unable to query. Error: "+JSON.stringify(err, null, 2)}';
        			console.error(errStr);
                    reject(errStr);
                  } else {
                    console.log("Query succeeded.");
                    resolve(data);
                  }
                }
              )}
        });
  });
}

module.exports = {
  addMovie,
  listItems,
}