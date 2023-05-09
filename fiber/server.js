import express from 'express';

const app = express();

const template =`
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Fiber</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
  </html>
  `;

app.get('*', (req, res) => {
  res.send(template);
})

app.listen(3000,() => console.log('listening running...'))