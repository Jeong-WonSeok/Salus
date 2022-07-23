import { Route, Routes, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate push to="/login"/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
