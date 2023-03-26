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
        <div className="col-md-12 my-5 mx-auto">
          <table className="table table-hover">
            <thead className="text-white bg-secondary text-center">
              <tr>
                <th scope="col">Sr.no</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Number</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, id) => (
                <tr key={id}>
                  <td className="column">{id + 1}</td>
                  <td className="column">{contact.name}</td>
                  <td className="column">{contact.email}</td>
                  <td className="column">{contact.number}</td>
                  <td className="column">
                    <Link
                      to={`/edit/${contact.id}`}
                      className="btn btn-small btn-primary me-2"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      onClick={() => deleteContact(contact.id)}
                      className="btn btn-small btn-danger"
                    >
                      Delete
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
