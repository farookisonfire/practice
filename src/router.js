const { Router } = require('express')

module.exports = function routes(db) {
  const router = new Router()
  const myCollection = db.collection('project3')

  router.get('/', (req, res) => {
    myCollection.find().toArray((err, docs) => {
      if (err) res.sendStatus(500)
      console.log(docs)
      res.json(docs)
    })
  })
  return router
}
