import React from 'react'
import {combineReducers} from 'redux'

import datagrid from '../components/datagrid/datagridreducer'
import dictionary from '../components/home/header/headerReducer'

export default combineReducers({
	datagrid,
	dictionary
})