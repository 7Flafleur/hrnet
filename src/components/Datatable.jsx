import {AgGridReact} from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

import { useState } from 'react';



export default function Datatable(){

const [rowData,setRowdata] = useState([
    {firstname:'Employee',lastname:'1', startdate:'01/01/0002',department:'beginning',dob:'01/01/0001', street:'street', city:'sity',state:'A',zipcode:'01'}
])

const [colDef,setcoldef] = useState([
    {field: "firstname"},
    {field:"lastname"},
    {field:"startdate"},
    {}
])






    return(
        <div className="DTbody">
            <div className="ontopoftable">
                <p>show <input type='select'></input>entries</p>
                <p>Search <input type='text'></input> </p>
            </div>
            <div className='datatable'>

            </div>
        </div>
    )
}