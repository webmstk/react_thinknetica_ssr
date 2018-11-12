const express = require('express')

require('@babel/register')

const render = require('./render').default

const app = express()

app.use(express.static('public'))

app.get('/catalog', (req, res) => {
  const response = `
    <!doctype html>
    <html>
      <head>
        <title>Thinknetica react SSR</title>
      </head>
      <body>
        ${render()}
      </body>
    </html>
  `

  res.send(response)
})

app.listen(3001, () => console.log('Server is listening on port 3001'))
