import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

export default function Searchbox() {
  return (
    <div className="col-md-3 mx-auto my-5">
      <InputGroup className="mb-3">
        <FormControl placeholder="Search robot..." />
      </InputGroup>
    </div>
  );
}
