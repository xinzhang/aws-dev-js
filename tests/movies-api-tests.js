const axios = require('axios');
const uuid = require('uuid');
//const url = 'https://api.auscoservices.com.au/movies';
//const url = "https://2kd80scci5.execute-api.ap-southeast-2.amazonaws.com/dev";
//const url = 'd2k9iwbbnihl6u.cloudfront.net'
const url = 'https://1xsomsjfj3.execute-api.ap-southeast-2.amazonaws.com/Stage/movies';

const requestBody = `
{
  "resourcePath": "/add-movie",
   "body": "{\"title\": \"batman\",\"year\": \"2003\",\"info\": \"prdoudction\"}"
}
`

// axios.get(url, {
//   data: {
//     //resourcePath: '/add-movie',
//     //body: "{\"title\": \"batman2\",\"year\": \"2004\",\"info\": \"prdoudction\"}"
//     resourcePath: '/movies'
//   }
// }).then( val => {
//   console.log(val.data);
// }).catch( err => {
//   console.error(err);
// })

axios({
  method: 'post',
  url, 
  data:{
    resourcePath: "/movies"
  }
}).then( val => {
    console.log(val);
  }).catch( err => {
    console.error(err);
  })
