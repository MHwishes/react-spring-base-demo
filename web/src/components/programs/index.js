import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions/form'

class Index extends Component {
  signInProgram () {
    // window.location = 'https://jinshuju.net/f/vhCyGN'
    this.props.addUserName();
  }

  render () {
    return (
      <div className="App">
        <button onClick={this.signInProgram.bind(this)}>我要报名</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  addUserName: () => dispatch(actions.addNameInform())
})
export default connect(mapStateToProps,mapDispatchToProps)(Index)
