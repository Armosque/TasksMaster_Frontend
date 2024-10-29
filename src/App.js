
import { NavBar } from './componentes/navbar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Footer } from './componentes/footer/Footer';
import { Home } from './componentes/home/Home';
import { Login } from './componentes/auth/Login';
import { Register } from './componentes/auth/Register';
import { Logout } from './componentes/auth/Logout'
import {CreateTask} from './componentes/createTask/CreateTask'
import {Tasks} from './componentes/tasks/Tasks'
import {TaskDetails} from './componentes/tasks/TaskDetails'
import {PerfilUser} from './componentes/perfilUser/PerfilUser'
function App() {
  return (
    <>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/profile" element={<PerfilUser/>}/>
          <Route path="/createTask" element={<CreateTask/>}/>
          <Route path="/tasks" element={<Tasks/>}/>
          <Route path="/tasks/:taskId" element={<TaskDetails/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
