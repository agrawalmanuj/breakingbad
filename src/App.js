import React from 'react'
import Main from './Main'
import AboutMain from './AboutMain'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {
    return (
        <Router>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/about" component={AboutMain}/>
      </Switch>
    </Router>
    )
}

export default App
