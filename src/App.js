import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const data = [];
    const promise = async () => {
      await fetch("https://jsonplaceholder.typicode.com/users/")
        .then((response) => response.json())
        .then((json) => {
          json.map((contact) => {
            data.push({
              id: contact.id,
              name: contact.name,
              number: contact.phone,
              email: contact.email,
            });
          });
        });
      dispatch({ type: "FETCH_CONTACTS", payload: data });
    };
    promise();
  }, []);

  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/Contact_List" element={<Home />}></Route>
        <Route path="/add" element={<AddContact />}></Route>
        <Route path="/edit/:id" element={<EditContact />}></Route>
      </Routes>
    </div>
  );
};

export default App;
