const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server')
const Home =  require('../component/Home.jsx');

require("node-jsx").install()

const app = express()
const content = renderToString(React.createElement(Home));
app.use('/', function(req, res, next){
  res.send(
    `
     <html>
       <head>
         <title>ssr</title>
       </head>
       <body>
         <div id="root">${content}</div>
       </body>
     </html>
    `
    );
})
app.listen(3001, () => {
  console.log('listen on port 3001')
})