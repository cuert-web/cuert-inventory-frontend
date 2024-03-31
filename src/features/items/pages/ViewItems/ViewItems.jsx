import ItemsHeader from "@/features/items/components/ItemsHeader/ItemsHeader"
import ItemsTable from "@/features/items/components/ItemsTable/ItemsTable"
import { ViewItemsContainer } from "./ViewItems.styled"

const ViewItems = () => {
  return (
    <ViewItemsContainer>
      <ItemsHeader />
      <ItemsTable />
    </ViewItemsContainer>
  )
}

export default ViewItems
