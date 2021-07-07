import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <div>
      <Form onSubmit={submitHandler} style={{ display: "flex" }}>
        <Form.Control
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search Product"
          size="sm"
        ></Form.Control>
        <Button
          type="submit"
          variant="outline-success"
          size="sm"
          className="p-2"
        >
          Search
        </Button>
      </Form>
    </div>
  );
};

export default SearchBox;
