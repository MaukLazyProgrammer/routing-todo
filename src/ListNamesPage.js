import React, { useState } from "react";
import { GoPencil } from "react-icons/go";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import { addList, deleteData, editList } from "./redux/actions";

const ListNamesPage = () => {
  const dispatch = useDispatch();

  const allData = useSelector((state) => state.ListsReducer);

  const [listName, setListName] = useState("");
  const [listDate, setListDate] = useState("");
  const [editFlag, setEditFlag] = useState(false);
  const [editObject, setEditObject] = useState();

  const editListHandler = (id) => {
    setEditFlag(true);
    const editListObject = allData.find((each) => each.listID == id);
    setListName(editListObject.listName);
    setListDate(editListObject.listDate);
    setEditObject(editListObject);
  };

  const handleSubmit = () => {
    editFlag
      ? dispatch(editList(editObject.listID, listName, listDate))
      : dispatch(addList(Date.now(), listName, listDate));

    setListName("");
    setListDate("");
    setEditFlag(false);
  };

  return (
    <Container>
      <Row className="my-2">
        <h1>List Names</h1>
      </Row>
      <Form className="my-4">
        <Row>
          <Col>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Enter list name"
                id="listName"
                name="listName"
                value={listName}
                onChange={(e) => setListName(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Control
                type="date"
                id="listDate"
                placeholder="Enter list date"
                name="listDate"
                value={listDate}
                onChange={(e) => setListDate(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Button
              type="button"
              className={`btn btn-primary ${listName.length < 1 && "disabled"}`}
              onClick={handleSubmit}
            >
              {editFlag ? "Update" : "Add"}
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
          {allData.map((each) => {
            return (
              <tr key={each.listID}>
                <td className="text-capitalize">
                  <Link to={`/ListTodos/${each.listID}`}>{each.listName}</Link>
                </td>
                <td>{each.listDate}</td>
                <td
                  onClick={() => editListHandler(each.listID)}
                  style={{ cursor: "pointer", color: "blue" }}
                >
                  {<GoPencil />}
                </td>
                <td
                  onClick={() => dispatch(deleteData(each.listID))}
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

export default ListNamesPage;
