import { useState, useEffect } from 'react';

const fetchEmployees = async (companyId) => {
  // Использую тестовую API https://jsonplaceholder.typicode.com/users/ для демонстрации работы хука, 
  // если бы был боевой API в URL бы передавал дополнительно наш параметр companyId через ${companyId}
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`); 
  if (!response.ok) {
    throw new Error('Failed to fetch employees, check URL or ID');
  }
  return response.json();
};

const useEmployeeList = (companyId) => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const reloadEmployees = async () => {
    try {
      setLoading(true);
      const newEmployees = await fetchEmployees(companyId);
      setEmployees(newEmployees);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (companyId) {
      reloadEmployees();
    } 
  }, [companyId]);

  return { employees, loading, error, reloadEmployees };
};

export default useEmployeeList;
