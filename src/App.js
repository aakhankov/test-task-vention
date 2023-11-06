import React from 'react';
import CompanyEmployees from './CompanyEmployees';

const companyValueID = 1;

function App() {
  return (
    <div className='wrapper'>
      <h1>Company Employees</h1>
      <CompanyEmployees companyId={companyValueID} />
    </div>
  );
}

export default App;
