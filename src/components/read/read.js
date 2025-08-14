import React, { useEffect, useState } from "react";
// import {Table } from 'reactstrap'
import axios from "axios";
import { Link } from "react-router-dom";

function Read() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://627fa751b1cc1b12625886d2.mockapi.io/crud`)
      .then((getData) => {
        setApiData(getData.data);
      });
  }, []);

  const setData = (id, firstName, lastName) => {
    console.log(id);
    localStorage.setItem("ID", id);
    localStorage.getItem("firstName");
    localStorage.getItem("lastName");
  };

  const getData = () => {
    axios
      .get(`https://627fa751b1cc1b12625886d2.mockapi.io/crud`)
      .then((getData) => {
        setApiData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://627fa751b1cc1b12625886d2.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      });
  };

  return (
    <>
      <div className="tableBox">
        <table>
          <thead className="thead-class">
            <tr>
              <th>Number</th>
              <th>F Name </th>
              <th>L Name </th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((data) => {
              return (
                <tr>
                  <th scope="row">{data.id}</th>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>
                    <Link to="/update">
                      {/* onClick={() => setID(data.id)} */}
                      <button
                        type="button"
                        value="firstName"
                        onClick={() =>
                          setData(data.id, data.firstName, data.lastName)
                        }
                        className="update"
                      >
                        Update
                      </button>
                    </Link>
                  </td>
                  <td>
                    <Link to="/read">
                      <button
                        type="button"
                        value="lastName"
                        onClick={() => onDelete(data.id)}
                        className="delete"
                      >
                        Delete
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      <div className="contentBox">
        <div className="formBox">
          <form className="inputBox">
            <Link to="/create">
              <input type="button" value="Add New Data" />
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Read;
