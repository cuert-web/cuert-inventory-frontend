import React from "react";
import ProductsTable from "../../components/ProductsTable/ProductsTable";
import ViewProductsHeader from "../../components/ViewProductsHeader/ViewProductsHeader";
import { useState } from "react";

export default function ViewProducts() {
  const [search, setSearch] = useState();
  return (
    <>
    <ViewProductsHeader setSearch={setSearch} />
    <ProductsTable search={search} />
    </>
    )
}
