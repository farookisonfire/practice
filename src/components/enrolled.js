const React = require('react')
const { connect } = require('react-redux')
const Highcharts = require('highcharts')
const { example, lineGraph } = require('./options')

const Enrolled = ({ enrolled }) => {
  { $(function () {
    Highcharts.chart('container', lineGraph);
  }) }

    return(
    <div>
      <div id="container"></div>
      <ul>
        { enrolled.map((user, key) =>
          <li key={key}>{ user.firstName }</li>
        ) }
      </ul>
    </div>
    )}

  const mapStateToProps = ({ enrolled }) => {
    const enrolledUsers = Object
      .keys(enrolled)
      .map(key => {
        return enrolled[key]
      })
      return {
        enrolled: enrolledUsers
      }
  }

  module.exports = connect(mapStateToProps)(Enrolled)
