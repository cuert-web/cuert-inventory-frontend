import {
  StyledError,
  StyledInputContainer,
  StyledInputField,
} from "./InputField.styled";

const InputField = ({
  type,
  onChange,
  value,
  placeholder,
  name,
  isError,
  errorMessage,
}) => {
  return (
    <StyledInputContainer>
      <StyledInputField
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        name={name}
        isError={isError}
      />
      {isError && <StyledError>{errorMessage}</StyledError>}
    </StyledInputContainer>
  );
};

export default InputField;
