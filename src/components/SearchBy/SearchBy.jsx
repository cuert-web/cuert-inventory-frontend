import { useSearchParams } from "react-router-dom";
import Select from "@/components/Select/Select";

const SearchBy = ({ options }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentSearchBy = searchParams.get("searchBy") || "";

  function handleChange(event) {
    searchParams.set("searchBy", event.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select
      options={options}
      onChange={handleChange}
      value={currentSearchBy}
    />
  );
};

export default SearchBy;
