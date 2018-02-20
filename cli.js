/* Categories 

  "explicit",
  "dev",
  "movie",
  "food",
  "celebrity",
  "science",
  "sport",
  "political",
  "religion",
  "animal",
  "history",
  "music",
  "travel",
  "career",
  "money",
  "fashion"
*/
const request = require('request');

const args = process.argv;

const api = 'https://api.chucknorris.io/jokes/random';
const method = 'GET';

let url = api;
let category;

if(args.length > 2){
  category = args[2].split(',');  
}

if(category){
  url += `?category=${category}`;
  console.log(url)
}

const options = {
  url,
  method,
  headers: {
    'content-type': 'application/json'
  }
}

request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(`\n SUCCESSFUL: (${response.statusCode}): ${JSON.parse(response.body).value}`);
    } else {
        console.log(`ERROR: ${error}`);
    }
});




