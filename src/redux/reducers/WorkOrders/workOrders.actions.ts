import IAction from '../../../types/IAction'
import IWorkOrder from '../../../types/IWorkOrder'
import actionTypes from './workOrders.actionTypes';

const workOrdersLoadStart = (): IAction<void> => {
    return {
        type: actionTypes.WORK_ORDERS_LOAD_START
    }
}

const workOrdersLoadSuccess = (workOrders: IWorkOrder[]): IAction<IWorkOrder[]> => {
    return {
        type: actionTypes.WORK_ORDERS_LOAD_SUCCESS,
        payload: workOrders
    }
}

const workOrdersLoadError = (errorMessage: string): IAction<string> => {
    return {
        type: actionTypes.WORK_ORDERS_LOAD_ERROR,
        payload: errorMessage
    }
}

export default {
    workOrdersLoadStart,
    workOrdersLoadSuccess,
    workOrdersLoadError
}