const fastify = require('fastify')
const path = require('path')

const app = fastify()

app.register(require('fastify-static'), {
  root: path.join(__dirname, 'dist/_assets'),
  prefix: `/_assets/`,
})

app.get('/health', (request, reply) => {
  reply.code(200).header('Content-Type', 'text/plain; charset=utf-8').send('OK')
})

app.get('/favicon.svg', (request, reply) => {
  return reply.sendFile('favicon.svg', path.join(__dirname, `dist`))
})

app.get('/*', (request, reply) => {
  return reply.sendFile('index.html', path.join(__dirname, `dist`))
})

if (require.main === module) {
  app.listen(3000, (err) => {
    if (err) console.error(err)
    console.log('server listening on 3000')
  })
} else {
  module.exports = app
}
