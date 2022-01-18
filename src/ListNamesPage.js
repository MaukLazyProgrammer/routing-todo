import React, { useState } from "react";
import { GoPencil } from "react-icons/go";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const ListNamesPage = () => {
  const allNames = useSelector((state) => state.ListsReducer.allListNames);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();
  const [editFlag, setEditFlag] = useState(false);
  const [editObject,setEditObject] = useState(null)
  
  let editListHandler = (id) => {
    setEditFlag(true);
    const editListObject = allNames.find((each) => each.id === id);
    //   console.log(editListObject);
    setTitle(editListObject.title);
    setDate(editListObject.date);
    setEditObject(editListObject)
  };
console.log(editObject);
  let deleteListHandler = (id) => {
    console.log(id);
  };

  return (
    <div className="container">
      <form className="form-inline my-4">
        <input
          type="text"
          className="col-md-5 mx-3"
          name="listName"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="date"
          className="col-md-5 mx-3"
          name="listName"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            editFlag
              ? dispatch({
                  type: "EDIT_LIST",
                  data: { id: editObject.id , title: title, date: date },
                })
              : dispatch({
                  type: "ADD_LIST",
                  data: { id: Date.now(), title: title, date: date },
                });

            setTitle("");
            setDate("");
            setEditFlag(false)
          }}
        >
          {editFlag ? "Update" : "Add"}
        </button>
      </form>
      <table className="table table-borderless table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allNames.map((each) => {
            return (
              <tr key={each.id}>
                <td>
                  <Link to={`/ListTodos/${each.id}`}>{each.title}</Link>
                </td>
                <td>{each.date}</td>
                <td
                  onClick={() => editListHandler(each.id)}
                  style={{ cursor: "pointer", color: "blue" }}
                >
                  {<GoPencil />}
                </td>
                <td
                  onClick={() => deleteListHandler(each.id)}
                  style={{ cursor: "pointer", color: "red" }}
                >
                  {<ImCross />}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListNamesPage;
