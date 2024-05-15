import React, { useState, createContext } from "react";
import "./App.css";
import { allStudents } from "./models/allStudents";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";

// create our variable to rep context
export const StudentContext = createContext();

function App() {
  const [students, setStudents] = useState(allStudents);

  const [currentStudent, setCurrentStudent] = useState({});

  return (
    <div className="App">
      <StudentContext.Provider value={{ students, setStudents, currentStudent,setCurrentStudent }}>
        <div className="mainContainer">
          <div className="dash">
            <Dashboard />
          </div>
          <div className="profile">
            <Profile />
          </div>
        </div>
      </StudentContext.Provider>
    </div>
  );
}

export default App;