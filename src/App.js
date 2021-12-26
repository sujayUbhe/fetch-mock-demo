import React, { useEffect, useState } from "react";
import { UserList } from "./components/userList/index";
import "./App.css";

const App = () => {
  const [demoData, setDemoData] = useState(null);
  useEffect(() => {
    fetch("api/get_user_data")
      .then((response) => response.json())
      .then((data) => {return (setDemoData(data))});
  }, []);
  return (
    <div className="p-4">
      <h4 className="pb-3 font-weight-bold">User Details</h4>
      <UserList userData={demoData}/>
    </div>
  );
};
export default App;
