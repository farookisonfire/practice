const { MongoClient } = require('mongodb')
const createApp = require('./express')

const DEFAULT_MONGO_URI = 'mongodb://localhost:27017/six'
const MONGO_URI = process.env.MONGO_URI || DEFAULT_MONGO_URI
const PORT =  process.env.PORT ||3001

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
