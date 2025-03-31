import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './Layout'

function App() {

  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<div>Hello</div>}/>
          <Route path='/test' element={<div>test</div>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
