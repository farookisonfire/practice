const { MongoClient } = require('mongodb')
const createApp = require('./express')

const MONGO_URI = 'mongodb://localhost:27017/six'
const PORT = 3001

MongoClient.connect(MONGO_URI, (err, db) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  const app = createApp(db)

  app.listen(PORT, () => {
    console.log('listening on Port: ' + PORT)
  })
})
