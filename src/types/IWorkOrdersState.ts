import IWorkOrder from "./IWorkOrder"

export default interface IWorkOrdersState {
    isLoading: boolean,
    workOrders: IWorkOrder[],
    errorMessage: string | null
}