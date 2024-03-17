import React from "react";
import { AddProductContainer } from "../AddProduct/AddProduct.styled";
import EditProductForm from "../../components/EditProductForm/EditProductForm";

export default function EditProduct() {
  return (
    <AddProductContainer>
      <h1>Edit A product</h1>
      <EditProductForm />
    </AddProductContainer>
  );
}
