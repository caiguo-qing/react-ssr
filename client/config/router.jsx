import React from 'react'
import {
  Route,
  Redirect,
  Router,
  Switch
} from 'react-router-dom'


import TopicList from '../views/topic-list'
import TopicDetail from '../views/topic-detail'
import TestApi from '../views/test/TestApi'

export default () => [
  <Route path="/" exact render={() => <Redirect to="/list" />} key="1" />,
  <Route path="/list" component={TopicList} key="list" />,
  <Route path="/detail" component={TopicDetail} key="detail" />,
  <Route path="/test" component={TestApi} key="test" />
]

