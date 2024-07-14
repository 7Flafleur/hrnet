import { Link } from "react-router-dom"


export default function CreateEmployeePage() {

    return (
        <div className="CEbody">
            <h1>HRNet</h1>
            <Link to="/employee-list">View Current Employees </Link>
            <h2> Create New Employee</h2>
        </div>
    )


}