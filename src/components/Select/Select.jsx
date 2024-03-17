import {
  FormControl,
  InputLabel,
  Select as MUISelect,
  MenuItem,
} from "@mui/material";
const Select = ({ options, value, ...props }) => {
  return (
    <FormControl
      sx={{
        minWidth: 120,
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "green", // Change the active input border color here
        },
      }}
      size="small"
    >
      <InputLabel
        id="demo-simple-select-label"
        sx={{
          "&.Mui-focused": {
            color: "green",
          },
        }}
      >
        search-by
      </InputLabel>
      <MUISelect
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value || ""}
        label="sort-by"
        {...props}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  );
};

export default Select;
