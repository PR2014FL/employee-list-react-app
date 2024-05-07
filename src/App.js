import { useState } from 'react';

import { allEmployees } from './data/data'

import HomePage from './components/HomePage';
import EmployeePage from './components/EmployeePage';

import './App.css';

export default function App() {
  const [selectedEmployee, setSelectedEmployee] = useState(allEmployees[0]);

  return (
    <main className="App">
      <HomePage employees={allEmployees} setSelectedEmployee={setSelectedEmployee} />
      <EmployeePage selectedEmployee={selectedEmployee} />
    </main>
  );
}


