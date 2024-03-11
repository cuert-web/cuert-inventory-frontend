import { HeaderContainer } from "./ViewSuppliersHeader.styled";
import SortBy from "@/components/SortBy/SortBy";

const ViewSuppliersHeader = () => {
  return (
    <HeaderContainer>
      <h1>Suppliers</h1>
      <div>
        <SortBy options={options} />
      </div>
    </HeaderContainer>
  );
};

export default ViewSuppliersHeader;

const options = [
  { label: "supplier name (A - Z)", value: "sname-asc" },
  { label: "supplier name (Z - A)", value: "sname-desc" },
  { label: "executer name (A - Z)", value: "ename-asc" },
  { label: "executer name (Z - A)", value: "ename-desc" },
];
