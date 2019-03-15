import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import { AppStore } from '../../store/appStore'

@inject('appStore') @observer
export default class TopicList extends Component {

  componentDidMount() {
    // do something here
  }

  changeName = (event) => {
    this.props.appStore.changeName(event.target.value)
  }
  
  render() {
    return (
      <div>
        <input type="text" onChange={this.changeName} />
        <span>{this.props.appStore.msg}</span>
      </div>
    )
  }


}

TopicList.propTypes = {
  appStore: PropTypes.instanceOf(AppStore).isRequired,
}