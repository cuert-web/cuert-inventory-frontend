import SearchBar from "../SearchBar/SearchBar"
import { ItemsHeaderContainer } from "./ItemsHeader.styled"

const ItemsHeader = () => {
  return (
    <ItemsHeaderContainer>
      <h1>Items</h1>
      <SearchBar />
    </ItemsHeaderContainer>
  )
}

export default ItemsHeader
