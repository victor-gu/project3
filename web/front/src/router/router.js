import React from 'react'
import {Route} from 'react-router'

import HomeComponent from '../components/home/HomeComponent'
import SortComponent from '../components/sort/SortComponent'
import CartComponent from '../components/cart/CartComponent'
import MyselfComponent from '../components/MyselfComponent/MyselfComponent'
import LoginComponent from '../components/login/LoginComponent'
import RegComponent from '../components/reg/RegComponent'


import SearchComponentlzf from '../components/SearchComponent/SearchComponent.js'

import NewComponent from '../components/home/lunbo/LunboComponent'


import DetailsComponent from "../components/DetailsComponent/DetailsComponent";
import GoodsComponent from "../components/DetailsComponent/GoodsComponent/GoodsComponent";
import PictureComponent from "../components/DetailsComponent/PictureComponent/PictureComponent";
import ParamsComponent from "../components/DetailsComponent/ParamsComponent/ParamsComponent";
import EvaluateComponent from "../components/DetailsComponent/EvaluateComponent/EvaluateComponent";


export default (
    <Route>
        <Route path="/" component={HomeComponent} />
        <Route path="/sort" component={SortComponent} />
        <Route path="/cart" component={CartComponent} />
        <Route path="/mine" component={MyselfComponent} />
        <Route path="/login" component={LoginComponent} />
        <Route path="/reg" component={RegComponent} />

        <Route path="/search" component={SearchComponentlzf}/>


        <Route path="/news" component={NewComponent} />

        <Route path="/details" component={DetailsComponent}>
            <Route path="/goods(/:goodsid)" component={GoodsComponent}/>
            <Route path="/picture" component={PictureComponent}/>
            <Route path="/params" component={ParamsComponent}/>
            <Route path="/evaluate" component={EvaluateComponent}/>
        </Route>

    </Route>
  
)