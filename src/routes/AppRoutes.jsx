import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateEmployeePage from '../pages/CreateEmployee';
import EmplyoeeList from '../pages/EmployeeList';


export const AppRoutes = () => {
    return (
        <Router>
            <Routes>         
                <Route path="/" element={<CreateEmployeePage />} />
                <Route path="/login" element={<EmplyoeeList />} />
            </Routes>
        </Router>
    );
}