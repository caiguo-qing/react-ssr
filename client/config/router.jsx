import React from 'react'
import {
  Route,
  Redirect,
  Router,
  Switch
} from 'react-router-dom'

import history from './history'

import TopicList from '../views/topic-list'
import TopicDetail from '../views/topic-detail'

export default () => [
  <Route path="/" exact render={() => <Redirect to="/list" />} key="1" />,
  <Route path="/list" component={TopicList} key="2" />,
  <Route path="/detail" component={TopicDetail} key="3" />
]
// export default () => {
//   return (
//     <Router history={history} >
//       <Switch>
//         <Route path="/" exact render={() => <Redirect to="/list" />} key="1" />,
//         <Route path="/list" component={TopicList} key="2" />,
//         <Route path="/detail" component={TopicDetail} key="3" />
//       </Switch>
//     </Router>
//   )
// }
