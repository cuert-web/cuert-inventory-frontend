import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TablePagination } from "@mui/material";
import { useState } from "react";

function createData(id, supplier, executer, createdAt, updatedAt) {
  return { id, supplier, executer, createdAt, updatedAt };
}

const rows = [
  createData(1, "Supplier 1", "Executer 1", "2021-10-01", "2021-10-05"),
  createData(2, "Supplier 2", "Executer 2", "2021-10-02", "2021-10-06"),
  createData(3, "Supplier 3", "Executer 3", "2021-10-03", "2021-10-07"),
  createData(4, "Supplier 4", "Executer 4", "2021-10-04", "2021-10-08"),
  createData(5, "Supplier 5", "Executer 5", "2021-10-05", "2021-10-09"),
  createData(6, "Supplier 6", "Executer 6", "2021-10-06", "2021-10-10"),
  createData(7, "Supplier 7", "Executer 7", "2021-10-07", "2021-10-11"),
  createData(8, "Supplier 8", "Executer 8", "2021-10-08", "2021-10-12"),
  createData(9, "Supplier 9", "Executer 9", "2021-10-09", "2021-10-13"),
  createData(10, "Supplier 10", "Executer 10", "2021-10-10", "2021-10-14"),
  createData(11, "Supplier 11", "Executer 11", "2021-10-11", "2021-10-15"),
  createData(12, "Supplier 12", "Executer 12", "2021-10-12", "2021-10-16"),
  createData(13, "Supplier 13", "Executer 13", "2021-10-13", "2021-10-17"),
  createData(14, "Supplier 14", "Executer 14", "2021-10-14", "2021-10-18"),
  createData(15, "Supplier 15", "Executer 15", "2021-10-15", "2021-10-19"),
  createData(16, "Supplier 16", "Executer 16", "2021-10-16", "2021-10-20"),
  createData(17, "Supplier 17", "Executer 17", "2021-10-17", "2021-10-21"),
  createData(18, "Supplier 18", "Executer 18", "2021-10-18", "2021-10-22"),
  createData(19, "Supplier 19", "Executer 19", "2021-10-19", "2021-10-23"),
  createData(20, "Supplier 20", "Executer 20", "2021-10-20", "2021-10-24"),
  createData(21, "Supplier 21", "Executer 21", "2021-10-21", "2021-10-25"),
];

const SuppliersTable = () => {
  // console.log(x, "admin");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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
              <TableCell>ID</TableCell>
              <TableCell>Supplier</TableCell>
              <TableCell>Executer</TableCell>
              <TableCell>Created at</TableCell>
              <TableCell>Updated at</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) // Only render the desired number of rows
              .map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>{row.supplier}</TableCell>
                  <TableCell>{row.executer}</TableCell>
                  <TableCell>{row.createdAt}</TableCell>
                  <TableCell>{row.updatedAt}</TableCell>
                  <TableCell></TableCell>
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

export default SuppliersTable;
