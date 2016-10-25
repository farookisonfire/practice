const React = require('react')
const { showEnrolled } = require('../actions')
const { connect } = require('react-redux')
const Enrolled = require('./enrolled')

const MainComponent = ({ displayEnrolled, dispatch }) => {
  return(
  <div>
    <h1 style={{textAlign: 'center'}}>At A Glance</h1>
    <button onClick={() => dispatch(showEnrolled())}>Show Enrolled</button>
    { displayEnrolled && <Enrolled/> }
  </div>
  )
}

const mapStateToProps = ({ displayEnrolled }) => {
  return {
    displayEnrolled
  }
}

module.exports = connect(mapStateToProps)(MainComponent)
