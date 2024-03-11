import { TextField } from "@mui/material";

const InputField = ({ label, error, helperText, ...props }) => {
  return (
    <TextField
      label={label}
      error={error} // Pass the error prop
      helperText={helperText} // Pass the helperText prop
      variant="outlined"
      sx={{
        width: "70%",
        margin: "1rem 0",
        "& .MuiInputLabel-root.Mui-focused": {
          color: "green", // Change the active label color here
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "green", // Change the active input border color here
        },
      }}
      {...props} // Pass the rest of the props
    />
  );
};

export default InputField;
