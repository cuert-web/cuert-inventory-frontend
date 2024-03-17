import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import GlobalStyles from "@/styles/GlobalStyles";
import { Login, Signup } from "@/features/auth";
import AppLayout from "@/layouts/AppLayout";
import { Dashboard } from "@/features/dashboard";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import { AddSupplier, ViewSuppliers } from "@/features/suppliers";
import AddProduct from "./features/products/pages/AddProduct/AddProduct";
import ViewProducts from "./features/products/pages/ViewProducts/ViewProducts";
import EditProduct from "./features/products/pages/EditProduct/EditProduct";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="suppliers">
                <Route index element={<ViewSuppliers />} />
                <Route path="add-supplier" element={<AddSupplier />} />
              </Route>
              <Route path="products">
                <Route index element={<ViewProducts />} />
                <Route path="add-product" element={<AddProduct />} />
                <Route path="edit-product/:id" element={<EditProduct />} />
              </Route>
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
