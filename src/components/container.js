const React = require('react')
const { showEnrolled } = require('../actions')
const { connect } = require('react-redux')

const Counter = ({ count, dispatch }) => {
  return(
  <div>
    <h1>Counter</h1>
    <button onClick={() => dispatch(showEnrolled())}>Show Enrolled</button>
    <h4>{ count }</h4>
  </div>
  )
}

const mapStateToProps = ({ count }) => {
  return {
    count
  }
}

module.exports = connect(mapStateToProps)(Counter)
