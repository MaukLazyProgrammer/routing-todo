import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GoPencil } from "react-icons/go";
import { ImCross } from "react-icons/im";
import { Button, Row, Col, Container, Form, Table } from "react-bootstrap";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import { addTodoInList, deleteTodo, editTodoInList } from "./redux/actions";

const ListTodos = () => {
  const { listID } = useParams();

  const navigation = useNavigate();

  const [todoTitle, setTodoTitle] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const dispatch = useDispatch();
  const [editTodoFlag, setEditTodoFlag] = useState(false);
  const [editTodoObject, setEditTodoObject] = useState();

  const allTodos = useSelector((state) => state.ListsReducer);
  let selectedListTodos = allTodos.find((each) => each.listID == listID); //this contain object of selected list with todos

  const editTodoHandler = (id) => {
    setEditTodoFlag(true);
    const selectedTodo = selectedListTodos.listTodos.find(
      (each) => each.todoID === id
    );
    setEditTodoObject(selectedTodo);
    setTodoTitle(selectedTodo.todoTitle);
    setTodoDate(selectedTodo.todoDate);
  };

  const handleSubmit = () => {
    editTodoFlag
      ? dispatch(editTodoInList(listID, editTodoObject.todoID, todoTitle, todoDate))
      : dispatch(addTodoInList(listID, Date.now(), todoTitle, todoDate));

    setTodoTitle("");
    setTodoDate("");
    setEditTodoFlag(false);
  }

  return (
    <Container>
      <Button className="my-3 " onClick={() => navigation("/")}>
        {<BiLeftArrowAlt />} Back
      </Button>
      <Row className="my-2">
        <h1>List Todos</h1>
      </Row>
      <Form className="my-4">
        <Row>
          <Col>
            <Form.Group>
              <Form.Control
                type="text"
                id="todoName"
                // className="col-md-5 mx-3"
                placeholder="Enter todo name"
                name="todoName"
                value={todoTitle}
                onChange={(e) => setTodoTitle(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Control
                type="date"
                id="todoDate"
                // className="col-md-5 mx-3"
                name="todoDate"
                value={todoDate}
                onChange={(e) => setTodoDate(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Button
              type="button"
              className={`btn btn-primary ${todoTitle.length < 1 && "disabled"}`}
              onClick={handleSubmit}
            >
              {editTodoFlag ? "Update" : "Add"}
            </Button>
          </Col>
        </Row>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {selectedListTodos.listTodos &&
            selectedListTodos.listTodos.map((each) => {
              return (
                <tr key={each.todoID}>
                  <td className="text-capitalize">{each.todoTitle}</td>
                  <td>{each.todoDate}</td>
                  <td
                    onClick={() => editTodoHandler(each.todoID)}
                    style={{ cursor: "pointer", color: "blue" }}
                  >
                    {<GoPencil />}
                  </td>
                  <td
                    onClick={() => dispatch(deleteTodo(listID, each.todoID))}
                    style={{ cursor: "pointer", color: "red" }}
                  >
                    {<ImCross />}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};

export default ListTodos;
