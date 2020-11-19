const querystring = require('querystring')

const q = querystring.parse('year=2020&monnth=february')

console.log(JSON.stringify(q))

//{'year':'2020','month','fe..'}

//!  без ?
