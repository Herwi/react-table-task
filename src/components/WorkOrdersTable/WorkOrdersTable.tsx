import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadWorkOrdersAsync } from '../../redux/reducers/WorkOrders/workOrders.thunks'
import IWorkOrdersState from '../../types/IWorkOrdersState'
import Search from '../UI/Search'

const WorkOrdersTable = () => {
    const dispatch = useDispatch()
    const workOrders = useSelector((state: IWorkOrdersState) => state.workOrders)
    const [searchPhrase, setSearchPhrase] = useState("")

    useEffect(() => {
        dispatch(loadWorkOrdersAsync())
    }, [dispatch])

    const filtered = workOrders.filter(w => w.description.toUpperCase().includes(searchPhrase.toUpperCase()))

    return <>
        <Search phrase={searchPhrase} setPhrase={setSearchPhrase}/>
        <table>
            <thead>
                <tr>
                    <th>WO ID</th>
                    <th>Description</th>
                    <th>Received dat</th>
                    <th>Assigned to</th>
                    <th>Status</th>
                    <th>Priority</th>
                </tr>
            </thead>
            <tbody>
                {filtered.map(wo => <tr key={wo.work_order_id}>
                    <td>{wo.work_order_id}</td>
                    <td>{wo.description}</td>
                    <td>{wo.received_date}</td>
                    <td>{wo.assigned_to.map(at => <div key={at.person_name}>{at.person_name} ({at.status})</div>)}</td>
                    <td>{wo.status}</td>
                    <td>{wo.priority}</td>
                </tr>)}
            </tbody>
        </table>
    </>
}

export default WorkOrdersTable;