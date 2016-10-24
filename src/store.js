const { createStore } = require('redux')
const reducer = require('./reducer')
const initialState = require('./initial-state')

const store = createStore(reducer, initialState)

module.exports = store
