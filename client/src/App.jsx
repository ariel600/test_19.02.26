import { Route, Routes } from "react-router";
import DataPage from "./pages/DataPage";

export default function App() {
  return (
    <Routes>
      <Route path='/data' element={<DataPage />} />
    </Routes>
  )
}