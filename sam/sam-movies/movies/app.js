var movieService = require('./movieService');
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.lambdaHandler = async (event, context) => {
    try {
      console.log(event);
      
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
    
      if (resource === 'movies') {
        response.body = await movieService.listItems();
        console.log('response: ' +JSON.stringify(response));      
      }

    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
