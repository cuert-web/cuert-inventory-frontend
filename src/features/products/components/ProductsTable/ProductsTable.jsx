import BackspaceIcon from "@mui/icons-material/Backspace";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TablePagination } from "@mui/material";
import { useEffect, useState } from "react";
import { IconDiv } from "@/components/Sidebar/Sidebar.styled";
import EditIcon from "@mui/icons-material/Edit";
import { Link, useParams, useSearchParams } from "react-router-dom";

import rows from "../../row.json";

const ProductsTable = ({ search }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSearchBy = searchParams.get("searchBy") || "";

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [products, setProducts] = useState(rows);
  const [sortOrder, setSortOrder] = useState("dsc");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const handleDelete = (id) => {
    setProducts((products) => products.filter((row) => row.id !== id));
  };

  const sort = (column) => {
    if (sortOrder === "asc") {
      const sorted = [...products].sort((a, b) => {
        if (
          column === "totalValue" ||
          column === "totalQuantity" ||
          column === "id"
        ) {
          return a[column] > b[column] ? 1 : -1;
        } else {
          return a[column].toLowerCase() > b[column].toLowerCase() ? 1 : -1;
        }
      });
      setProducts(sorted);
    }

    if (sortOrder === "dsc") {
      const sorted = [...products].sort((a, b) => {
        if (
          column === "totalValue" ||
          column === "totalQuantity" ||
          column === "id"
        ) {
          return a[column] < b[column] ? 1 : -1;
        } else {
          return a[column].toLowerCase() < b[column].toLowerCase() ? 1 : -1;
        }
      });
      setProducts(sorted);
    }
    setSortOrder((prev) => (prev === "asc" ? "dsc" : "asc"));
  };

  return (
    <Paper>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell onClick={() => sort("id")}>ID</TableCell>
              <TableCell onClick={() => sort("item")}>Item</TableCell>
              <TableCell onClick={() => sort("uom")}>UOM</TableCell>
              <TableCell onClick={() => sort("team")}>Team</TableCell>
              <TableCell onClick={() => sort("totalQuantity")}>
                Tot.Qty
              </TableCell>
              <TableCell onClick={() => sort("totalValue")}>
                Tot.Value
              </TableCell>
              <TableCell onClick={() => sort("supplier")}>Supplier</TableCell>
              <TableCell onClick={() => sort("state")}>State</TableCell>
              <TableCell onClick={() => sort("createdAt")}>
                Created at
              </TableCell>
              <TableCell onClick={() => sort("updatedAt")}>
                Updated at
              </TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .filter((row) => {
                if (!search || !currentSearchBy) {
                  return true;
                } else if (currentSearchBy === "id") {
                  return row[currentSearchBy] === Number(search);
                } else {
                  return row[currentSearchBy].includes(search);
                }
              })
              .map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>{row.item}</TableCell>
                  <TableCell>{row.uom}</TableCell>
                  <TableCell>{row.team}</TableCell>
                  <TableCell>{row.totalQuantity}</TableCell>
                  <TableCell>{row.totalValue}</TableCell>
                  <TableCell>{row.supplier}</TableCell>
                  <TableCell>{row.state}</TableCell>
                  <TableCell>{row.createdAt}</TableCell>
                  <TableCell>{row.updatedAt}</TableCell>
                  <TableCell>
                    <IconDiv onClick={() => handleDelete(row.id)}>
                      <BackspaceIcon />
                      <p>Delete</p>
                    </IconDiv>
                    <Link to={`edit-product/${row.id}`} state={{from: "hey"}}>
                      <IconDiv>
                        <EditIcon />
                        <p>Edit</p>
                      </IconDiv>
                    </Link>
                  </TableCell>
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

export default ProductsTable;
