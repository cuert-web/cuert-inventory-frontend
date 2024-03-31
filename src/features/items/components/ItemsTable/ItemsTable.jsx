import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Chip,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  TablePagination,
} from "@mui/material";
import { useState } from "react";
import { Delete, Edit, MoreVert } from "@mui/icons-material";

function createData(
  id,
  name,
  code,
  unit_of_measure,
  quantity,
  specifications,
  status
) {
  return { id, name, code, unit_of_measure, quantity, specifications, status };
}

const rows = [
  createData(1, "Item 1", "Code 1", "Unit 1", 10, "Spec 1", "available"),
  createData(2, "Item 2", "Code 2", "Unit 2", 20, "Spec 2", "unavailable"),
  createData(3, "Item 3", "Code 3", "Unit 3", 30, "Spec 3", "available"),
  createData(4, "Item 4", "Code 4", "Unit 4", 40, "Spec 4", "unavailable"),
  createData(5, "Item 5", "Code 5", "Unit 5", 50, "Spec 5", "available"),
  createData(6, "Item 6", "Code 6", "Unit 6", 60, "Spec 6", "unavailable"),
  createData(7, "Item 7", "Code 7", "Unit 7", 70, "Spec 7", "available"),
  createData(8, "Item 8", "Code 8", "Unit 8", 80, "Spec 8", "unavailable"),
  createData(9, "Item 9", "Code 9", "Unit 9", 90, "Spec 9", "available"),
  createData(
    10,
    "Item 10",
    "Code 10",
    "Unit 10",
    100,
    "Spec 10",
    "unavailable"
  ),
  createData(11, "Item 11", "Code 11", "Unit 11", 110, "Spec 11", "available"),
  createData(
    12,
    "Item 12",
    "Code 12",
    "Unit 12",
    120,
    "Spec 12",
    "unavailable"
  ),
  createData(13, "Item 13", "Code 13", "Unit 13", 130, "Spec 13", "available"),
  createData(
    14,
    "Item 14",
    "Code 14",
    "Unit 14",
    140,
    "Spec 14",
    "unavailable"
  ),
  createData(15, "Item 15", "Code 15", "Unit 15", 150, "Spec 15", "available"),
];

const ItemsTable = () => {
  // console.log(x, "admin");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Unit</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) // Only render the desired number of rows
              .map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.unit_of_measure}</TableCell>
                  <TableCell>{row.quantity}</TableCell>
                  <TableCell>
                    <Chip
                      variant="outlined"
                      color={row.status === "available" ? "success" : "error"}
                      label={row.status}
                      size="small"
                    />
                  </TableCell>
                  <TableCell align="right">
                    <IconButton onClick={handleClick}>
                      <MoreVert />
                    </IconButton>
                  </TableCell>
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    sx={{
                      "& .MuiMenu-paper": {
                        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
                      },
                    }}
                  >
                    <MenuItem onClick={handleClose}>request item</MenuItem>
                    <MenuItem onClick={handleClose}
                    sx={{
                        color: (theme) => theme.palette.warning.main,
                      }}
                    >
                      <ListItemIcon>
                        <Edit fontSize="small" color="warning"/>
                      </ListItemIcon>
                      edit
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      sx={{
                        color: (theme) => theme.palette.error.main,
                      }}
                    >
                      <ListItemIcon>
                        <Delete fontSize="small" color="error" />
                      </ListItemIcon>
                      delete
                    </MenuItem>
                  </Menu>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default ItemsTable;
