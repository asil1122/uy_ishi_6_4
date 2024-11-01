import React from "react";
import Form from "./components/form/form";
import { useSelector } from "react-redux";
import Card from "./components/card/card";

function App() {
  const user = useSelector((state) => state.user);
  console.log(user);

  return (
    <>
    <div className="container">
      <Form />
      <ul>
        {user.map((user) => (
          <li key={user.id}>
            <Card
              id={user.id}
              firstName={user.firstName}
              lastName={user.lastName}
            />
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default App;
