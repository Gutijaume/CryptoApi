import Button from "@material-ui/core/Button";
import React from "react";
import { Link } from "wouter";

export default function SignBtn() {
  return (
    <div className="nav-btn">
<Link to="/sign">
      <Button variant="contained" color="primary" type="button">
        Sign in
      </Button>
 </Link>
    </div>
  );
}


  