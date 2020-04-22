import React, { Component } from 'react'
import './router.css'
import Admin from './admin'
import App from './App'
import Login from './pages/login'
import Button from './pages/ui/button'
import UiLogin from './pages/form/login'
import NotFind from './pages/NotFind'
import Register from './pages/form/register'
import Table from './pages/table/table'
import City from './pages/city/index'
import Bar from './pages/echarts/bar'
import Pie from './pages/echarts/pie'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
export default class Routers extends Component {
  render() {
    return (
      <div>
        <Router>
            <App>
              <Route path='/login' component={Login}/>
              <Route path='/admin' render={()=>
                <Admin>
                  <Switch>
                  <Route path='/admin/ui/buttons' component={Button}/>
                  <Route path='/admin/form/login' component={UiLogin}/>
                  <Route path='/admin/form/reg' component={Register}/>
                  <Route path='/admin/table/basic' component={Table}/>
                  <Route path='/admin/city' component={City}/>
                  <Route path='/admin/charts/bar' component={Bar}/>
                  <Route path='/admin/charts/pie' component={Pie}/>
                  
                  
                  
                  <Route path='' component={NotFind}/>
                  
                  </Switch>
                </Admin>
              }/>
              
            </App>
        </Router>
      </div>
    )
  }
}

