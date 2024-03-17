import React from "react";
import ProductForm from "../../components/ProductForm/ProductForm";
import { AddProductContainer } from "./AddProduct.styled";

export default function AddProduct() {
  return (
    <AddProductContainer>
      <h1>Create A product</h1>
      <ProductForm />
    </AddProductContainer>
  );
}
