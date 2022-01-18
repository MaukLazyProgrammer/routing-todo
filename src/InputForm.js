import React from "react";

const InputForm = () => {
  return (
    <form className="form-inline my-4">
      <input type="text" className="col-md-5 mx-3" name="listName" />
      <input type="date" className="col-md-5 mx-3" name="listName" />
      <button type="button" className="btn btn-primary">
        Add
      </button>
    </form>
  );
};

export default InputForm;
