import React from 'react';
import useEmployeeList from './useEmployeeList';

const CompanyEmployees = ({ companyId }) => {
  const { employees, loading, error, reloadEmployees } = useEmployeeList(companyId);
  const reloadButton = <button className='employeeButton' onClick={reloadEmployees}>Reload Employees</button>
  if (loading) {
    return <p className='loading'>Loading employees...</p>;
  }
  if (error) {
    return <div>
        <p className='error'>Error: {error.message}</p>
        {reloadButton}
      </div>;
  }

  return (
    <div >
      <ul className='employeeBlock'>
        {employees.map((employee) => (
          <li key={employee.id}>{employee.name}</li>
        ))}
      </ul>
      {reloadButton}
    </div>
  );
};

export default CompanyEmployees;
