const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here

const http = require('http');
const port = 3000;

server = http.createServer((req, res)=> {
  let reqBody = ''
  req.on('data', (data) => {
    reqBody += data;
  });

  req.on('end', () => {
    req.body = parseBody(reqBody)
    sendFormPage(req, res);
  });

});

server.listen(port,  ()=> console.log("Successfully started the server on",port));
/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };