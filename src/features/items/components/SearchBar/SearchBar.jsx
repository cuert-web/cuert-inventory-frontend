import { Search } from "@mui/icons-material"
import { SearchBarContainer, SearchBarInput } from "./SearchBar.styled"

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchBarInput type="text" placeholder="Search..." />
      <Search style={{ marginRight: "8px" }} />
    </SearchBarContainer>
  )
}

export default SearchBar
