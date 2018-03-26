import React from 'react'
import {Route} from 'react-router'

import HomeComponent from '../components/home/HomeComponent'
import SortComponent from '../components/SortComponent/SortComponent'
import CartComponent from '../components/CartComponent/CartComponent'
import MyselfComponent from '../components/MyselfComponent/MyselfComponent'


export default (
    <Route>
        <Route path="/" component={HomeComponent} />
        <Route path="/sort" component={HomeComponent} />
        <Route path="/cart" component={HomeComponent} />
        <Route path="/mine" component={HomeComponent} />
    </Route>
  
)