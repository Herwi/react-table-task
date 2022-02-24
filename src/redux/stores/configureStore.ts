import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import workOrdersReducer from '../reducers/WorkOrders/workOrders.reducer'

const store = createStore(workOrdersReducer, applyMiddleware(thunk))
export default store