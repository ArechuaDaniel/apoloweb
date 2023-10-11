import { BrowserRouter } from "react-router-dom";
import ClubRoutes from "./routes/ClubRoutes";



function App() {
  return (
    <BrowserRouter>
      <ClubRoutes/>
    </BrowserRouter>
  );
}
export default App;
