import SupplierForm from "../../components/SupplierForm/SupplierForm";
import { AddSupplierContainer } from "./AddSupplier.styled";

const AddSupplier = () => {
  return (
    <AddSupplierContainer>
      <h1>Add Supplier</h1>
      <SupplierForm />
    </AddSupplierContainer>
  );
};

export default AddSupplier;
