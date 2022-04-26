import  {Error}  from './pages/Error';
import  {CreateEmployee } from './pages/CreateEmployee';
import {EmployeeList}  from './pages/EmployeeList';
import Header from './components/Header/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";;



function App() {
  return (
  
   <BrowserRouter>
   <Header />
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" index element={<CreateEmployee />} />
      <Route path="/employee-list" element={<EmployeeList />} />
    </Routes>
    </BrowserRouter> 
  );
}

export default App;