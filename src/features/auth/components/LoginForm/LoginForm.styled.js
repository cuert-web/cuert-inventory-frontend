import { styled } from "@mui/material";

export const StyledLoginForm = styled("form")`
  max-width: 100%;

  & .mb-3 {
    margin-bottom: 1rem;
  }

  & .mb-3 img {
    margin-left: 1rem;
  }

  & .mb-3 label {
    margin-left: 10px;
    margin-right: 10px;
  }

  & input {
    width: 350px;
    border-radius: 20px;
    height: 40px;
    color: aliceblue;
    background: transparent;
    outline: none;
    border: 2px solid rgba(131, 119, 119, 0.452);
    padding-left: 1rem;
    margin-top: 5px;
    max-width: 100%;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const LoginBtn = styled("button")`
  width: 100%;
  display: inline-block;
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  color: #fff;
  text-align: center;
  background-color: #198754;
  border-radius: 0.375rem;
  outline: none;
  border: none;
  margin-bottom: 1rem;
`;
