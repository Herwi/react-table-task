import IWorkOrderState from '../../../types/IWorkOrdersState'

const initialState: IWorkOrderState = {
    isLoading: false,
    workOrders: [],
    errorMessage: null
}

export default initialState