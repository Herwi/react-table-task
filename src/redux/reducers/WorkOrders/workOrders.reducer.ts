import IAction from '../../../types/IAction'
import IWorkOrder from '../../../types/IWorkOrder'
import IWorkOrdersState from '../../../types/IWorkOrdersState'
import actionTypes from './workOrders.actionTypes'
import initialState from './workOrders.initialState'

const workOrdersReducer = (
    state: IWorkOrdersState = initialState,
    { type, payload }: IAction<IWorkOrder[] | string | void>
): IWorkOrdersState => {
    switch(type) {
        case actionTypes.WORK_ORDERS_LOAD_START:
            return {
                isLoading: true,
                workOrders: [],
                errorMessage: null
            }
        case actionTypes.WORK_ORDERS_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                workOrders: payload as IWorkOrder[]
            }
        case actionTypes.WORK_ORDERS_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: payload as string
            }
        default:
            return state
    }
}

export default workOrdersReducer