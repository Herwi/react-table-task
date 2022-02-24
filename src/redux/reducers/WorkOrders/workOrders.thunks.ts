import WorkOrdersService from '../../../services/workOrders.service'
import actions from './workOrders.actions'
import IAction from '../../../types/IAction'
import IWorkOrder from '../../../types/IWorkOrder'

type DispatchFunction = (action: IAction<IWorkOrder[] | string | void>) => void

export const loadWorkOrdersAsync = () => (dispatch: DispatchFunction) => {
    dispatch(actions.workOrdersLoadStart())

    WorkOrdersService.getAllWorkOrders()
        .then((response) => dispatch(
            actions.workOrdersLoadSuccess(response.response.data)
        ))
        .catch((error) => dispatch(actions.workOrdersLoadError(error.message)))
}
