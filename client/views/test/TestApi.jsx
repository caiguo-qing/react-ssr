import React, { Component } from 'react'
import axios from 'axios'

export default class TestApi extends Component {


  getTopics() {
    axios.get('/api/topics').then(resp => {
      console.log(resp)
    }).catch(err => {
      console.log(err)
    })
  }

  getLogin(){
    axios.post('/api/user/login',{
      accessToken:'b9e8276f-4e13-416e-a183-be03ac9fc87d'
    }).then(resp=>{
      console.log(resp)
    }).catch(err=>{
      console.log(err)
    })
  }

  getMarkAll() {
    axios.post('/api/message/mark_all?needAccessToken=true').then(resp=>{
      console.log(resp)
    }).catch(err=>{
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.getTopics} >topics</button>
        <button onClick={this.getLogin} >login</button>
        <button onClick={this.getMarkAll} >mark_all</button>
      </div>
    )
  }
}
