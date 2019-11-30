var movieService = require('./movieService');

exports.handler = async(event) => {
  // TODO implement
  const response = {
    statusCode: 200,    
    body: JSON.stringify('hello passes.'),
  };

  if (!event.resourcePath) {
    return response;  
  }

  if (typeof event === 'string')
    event = JSON.parse(event);

  var marker = event.resourcePath.lastIndexOf("/");
  var resource = event.resourcePath.substr(marker + 1);

  switch (resource) {
    case 'add-movie':
      response.body = await movieService.addMovie(event.body);
      console.log('response: ' +JSON.stringify(response));
      return response;

    case 'movies':
      response.body = await movieService.listItems();
      console.log('response: ' +JSON.stringify(response));
      return response;

    case 'hello':
      response.body = 'Hello from Lambda!'
      console.log('response: ' +JSON.stringify(response));
      return response;

    default:
      response.statusCode = 404;
      console.log('response: ' +JSON.stringify(response));
      return response;
  }
};
