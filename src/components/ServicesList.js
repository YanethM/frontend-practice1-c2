import React from "react";
import "./ServicesList.scss";
import { Grid } from "@mui/material";

export const ServicesList = ({ servicesParam }) => {
  console.log("Service param", servicesParam);
  return (
    <div className="content-services-list">
      <h2>Services List</h2>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={4}>
            <div className="grid1-style">
              <h2>Grid1</h2>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <div className="grid2-style">
              <h2>Grid1</h2>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <div className="grid3-style">
              <h2>Grid1</h2>
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={8} sm={8} md={8}>
            <div className="grid4-style">
              <h2>Grid4</h2>
              <Grid container spacing={2}>
                <Grid item xs={4} sm={4} md={4}>
                  <div className="img-content-grid">
                    {servicesParam.length > 0 ? (
                      servicesParam.map((service) => (
                        <div key={service._id}>
                          <img src={service.avatar} alt={service.nameService} />
                        </div>
                      ))
                    ) : (
                      <p>No hay servicios</p>
                    )}
                  </div>
                </Grid>
                <Grid item xs={8} sm={8} md={8}>
                  <div className="text-content-grid">
                    {servicesParam.length > 0 ? (
                      servicesParam.map((service) => (
                        <div key={service._id}>
                          <p>{service.nameService}</p>
                          <p>{service.serviceDescription}</p>
                        </div>
                      ))
                    ) : (
                      <p>No hay servicios</p>
                    )}
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>

          <Grid item xs={4} sm={4} md={4}>
            <div className="grid2-style">
              <h2>Grid2</h2>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
