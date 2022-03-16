import Button from "@material-ui/core/Button";
import React from "react";
import { Link } from "react-router-dom";

export default function DetailBtn() {
  return (
    <div className="nav-btn">
<Link to= {{pathname: `/detail`}}>
      <Button variant="contained" color="primary" type="button">
        Detalle
      </Button>
 </Link>
    </div>
  );
}