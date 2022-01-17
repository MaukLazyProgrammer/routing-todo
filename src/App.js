import "./App.css";
import { GoPencil } from "react-icons/go";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

function App() {
  const handleListClick = (id) => {
    console.log(id)
  };
  return (
    <div className="App container">
        <div className="col-md-6">
          <h1>its left div</h1>
          <form className="form-inline my-4">
            <input type="text" className="col-md-8 mx-3" name="listName" />
            <button type="button" className="btn btn-primary">
              Add
            </button>
          </form>

          <table className="table table-borderless table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td><Link to="/ListTodos/1">List 1</Link></td>
                  <td style={{ color: "blue" }}>{<GoPencil />}</td>
                  <td style={{ color: "red" }}>{<ImCross />}</td>
              </tr>
              <tr>
                <td>List</td>
                <td>edit</td>
                <td>del</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  );
}

export default App;
