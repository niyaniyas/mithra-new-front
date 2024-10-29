import React, { useState, useEffect } from "react";
import "./Technician.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  CircularProgress,
  Typography,
  Button,
} from "@mui/material";
// import { confirmAlert } from "react-confirm-alert";

const Technician = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState(null);
  const [editShow, setEditShow] = useState(false);

  const dummyData = [
    {
      id: 3,
      name: "Lenovo_Yoga11",
      location: "Rue Neuve 123, 1000 Bruxelles",
      description: "Lenovo Yoga S940",
      status: "Operating",
      dateAdded: "2020-09-01T00:00:00",
    },
    {
      id: 7,
      name: "Toshiba_Satellite11",
      location: "Boulevard Lambermont 1, 1000 Bruxelles",
      description: "Toshiba Satellite C55-B5300 16-Inch Laptop",
      status: "Operating",
      dateAdded: "2020-08-19T00:00:00",
    },
    {
      id: 5,
      name: "Toshib_Satellite y11",
      location: "Chaussée d'Ixelles 84/86, 1050 Ixelles",
      description: "Toshiba Satellite S55-C5274 15.6 Inch",
      status: "Maintenance",
      dateAdded: "2020-08-05T00:00:00",
    },
    // Add more dummy data as needed
  ];

  useEffect(() => {
    setIsLoading(true);
    setData(dummyData);
    setIsLoading(false);
  }, []);

  const deleteEquipment = (dataIndex) => {
    const equipment = data[dataIndex];

    alert({
      title: "",
      message: "Do you really want to delete this equipment?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            setData(data.filter((_, index) => index !== dataIndex));
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  const handleAddBtn = () => {
    setEditShow(true);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="home">
      <div className="btnContainer">
        <span>New Equipment</span>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddBtn}
          startIcon={<i className="fa fa-plus-circle" aria-hidden="true" />}
        >
          Add Equipment
        </Button>
      </div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Delete</TableCell>
                <TableCell>Edit</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>State</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Date Added</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <i
                      className="fa fa-trash"
                      aria-hidden="true"
                      onClick={() => deleteEquipment(page * rowsPerPage + index)}
                    />
                  </TableCell>
                  <TableCell>
                    <i
                      className="fa fa-pencil-square-o"
                      aria-hidden="true"
                      onClick={() => {
                        setEditData(row);
                        setEditShow(true);
                      }}
                    />
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.location}</TableCell>
                  <TableCell>{row.dateAdded}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default Technician;
