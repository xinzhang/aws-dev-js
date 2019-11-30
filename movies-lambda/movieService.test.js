const service = require('./movieService');

var testItem1 = '{ "title": "Godzilla vs. Dynamo", "year": "2016", "info": "New from AWS Films, starring Andy Jassy."}';
var testItem2 = '{"title": "movie-title2", "year": "2019", "info": "Amazon Studios presents"}';

//service.addMovie(JSON.parse(testItem1), "Movies");
(async () => {
  //const result = await service.listItems()
  await service.addMovie(JSON.parse(testItem2));
  console.log('finished');
})();
