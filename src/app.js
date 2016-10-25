const React = require('react')
const ReactDOM = require('react-dom')
const { Provider } = require('react-redux')
const MainComponent = require('./components/container')
const store = require('./store')

ReactDOM.render(
  <Provider store = { store }>
    <div>
      <MainComponent/>
    </div>
  </Provider>,
  document.getElementById('app')
)
