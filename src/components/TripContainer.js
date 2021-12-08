import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";

const TripContainer = (props) => {
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);

  const handleTripStartDateChange = (date) => {
    setStartDate(date);
    props.handleTripStartDateChange(date);
  };

  const handleTripEndDateChange = (date) => {
    setEndDate(date);
    props.handleTripEndDateChange(date);
  };

  let removeTripButton;
  if (!props.isFirstElement) {
    removeTripButton = (
      <Button
        variant="contained"
        color="error"
        size="small"
        startIcon={<DeleteIcon />}
        onClick={props.handleTripRemove}
        data-testid={"trip-remove-" + props.index}
        rounded
      >
        Remove
      </Button>
    );
  }

  return (
    <Form className="my-3">
      <Container>
        <Row>
          <Col xs={2} />
          <Col xs={4}>
            <Form.Group controlId="tripStartDate" className="float-end">
              <DatePicker
                label="Start date of Trip: "
                value={startDate}
                data-testid={"trip-start-date-" + props.index}
                inputFormat="dd/MM/yyyy"
                onChange={handleTripStartDateChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group controlId="tripEndDate" className="float-start">
              <DatePicker
                label="End date of Trip: "
                value={endDate}
                data-testid={"trip-end-date-" + props.index}
                inputFormat="dd/MM/yyyy"
                onChange={handleTripEndDateChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </Form.Group>
            <div className="float-start mt-4 ms-1">{removeTripButton}</div>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default TripContainer;
