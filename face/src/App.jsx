
import Login from './Component1/Login'
import Signup from './Component1/Signup'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Homepage/Home'
function App() {
  return (
    <>
<div className='App'>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/Home' element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
</div>
 </>
     )
}
export default App
