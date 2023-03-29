import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./home.css";

const Home = () => {
  const contacts = useSelector((state) => state);

  const dispatch = useDispatch();

  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    toast.success("Contact deleted successfully!");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 my-5">
          <table className="table table-hover">
            <thead className="text-white bg-secondary text-start">
              <tr>
                <th scope="col" className="remove">
                  Sr.no
                </th>
                <th scope="col">Name</th>
                <th scope="col" className="remove">
                  Email
                </th>
                <th scope="col">Number</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, id) => (
                <tr key={id}>
                  <td className="column remove">{id + 1}</td>
                  <td className="column">{contact.name}</td>
                  <td className="column remove">{contact.email}</td>
                  <td className="column">{contact.number}</td>
                  <td className="column">
                    <Link to={`/edit/${contact.id}`} className="btn btn-small">
                      <img
                        src="https://cdn-icons-png.flaticon.com/32/143/143437.png"
                        alt="Edit Contact"
                      />
                    </Link>
                    <button
                      type="button"
                      onClick={() => deleteContact(contact.id)}
                      className="btn btn-small"
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/32/6861/6861362.png"
                        alt="Delete Contact"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
