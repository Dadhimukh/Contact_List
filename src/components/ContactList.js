   import React, { useEffect } from "react";
   import { BrowserRouter, Route, Routes } from "react-router-dom";
   import { useDispatch } from "react-redux";
   import { ToastContainer } from "react-toastify";

   import Navbar from "./Navbar";
   import Home from "./Home";
   import AddContact from "./AddContact";
   import EditContact from "./EditContact";

   const ContactList = () => {
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
         <BrowserRouter>
         <ToastContainer />
         <Navbar />
<<<<<<< HEAD
         <BrowserRouter basename="Contact_List">
=======

>>>>>>> 346a312ba5d584479ddf76b1f26f74f4edbe416e
         <Routes>
            <Route path="/Contact_List" element={<Home />} />
            <Route path="/add" element={<AddContact />}></Route>
            <Route path="/edit/:id" element={<EditContact />}></Route>{" "}
         </Routes>
         </BrowserRouter>
      </div>
   );
   };

   export default ContactList;
