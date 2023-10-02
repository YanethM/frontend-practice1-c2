import React from "react";
import "./ServicesList.scss";
import { Grid } from "@mui/material";

export const ServicesList = ({ servicesParam }) => {
  console.log(servicesParam);
  return (
    <div className="content-services-list">
      <h2>Services List</h2>
      <div>
        <Grid xs={12} sm={6}>
          <div className="content-grid-left">
            <h2>Texto Grid1</h2>
          </div>
        </Grid>
        <Grid xs={12} sm={6}>
          <div className="content-grid-right">
            <h2>Texto Grid2</h2>
          </div>
        </Grid>
      </div>
    </div>
  );
};
