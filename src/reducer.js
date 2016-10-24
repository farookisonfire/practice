const initialState = require('./initial-state')

const reducer = (state = initialState, { type}) => {
  switch(type){
    case 'SHOW_ENROLLED':
      return Object.assign({}, state, { displayEnrolled: true })
    default:
      return state
  }
}

module.exports = reducer
