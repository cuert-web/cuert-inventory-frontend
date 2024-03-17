import { HeaderContainer } from "./ViewProductsHeader.styled";
import SearchBy from "@/components/SearchBy/SearchBy";

import * as React from "react";
import TextField from "@mui/material/TextField";

const ViewProductsHeader = ({ setSearch }) => {
  return (
    <HeaderContainer>
      <TextField
        id="outlined-search"
        sx={{
          margin: "1rem 0",
          "& .MuiInputLabel-root.Mui-focused": {
            color: "green",
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "green",
            },
        }}
        label="Search field"
        type="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchBy options={options} />
    </HeaderContainer>
  );
};
export default ViewProductsHeader;

const options = [
  { label: "ID", value: "id" },
  { label: "Supplier", value: "supplier" },
  { label: "team", value: "team" },
  { label: "UOM", value: "uom" },
];
