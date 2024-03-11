import SuppliersTable from "@/features/suppliers/components/SuppliersTable/SuppliersTable";
import ViewSuppliersHeader from "@/features/suppliers/components/ViewSuppliersHeader/ViewSuppliersHeader";
import { ViewSuppliersContainer } from "./ViewSuppliers.styled";

const ViewSuppliers = () => {
  return (
    <ViewSuppliersContainer>
      <ViewSuppliersHeader />
      <SuppliersTable />
    </ViewSuppliersContainer>
  );
};

export default ViewSuppliers;
