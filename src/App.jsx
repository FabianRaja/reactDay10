import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Pages/Dashboard'
import ViewPage from './Pages/ViewPage'
import AddPage from './Pages/AddPage'
import EditPage from './Pages/EditPage'


function App() {
   
  return (
        //Routes and Route is imported 
        //used React-Router-Dom for switching between Components and Pages
        <Routes>
            <Route exact path="/" element={<Dashboard/>}/>
            <Route path="/view" element={<ViewPage/>}/>
            <Route path="/add" element={<AddPage/>}/>
            <Route path="/edit" element={<EditPage/>}/>
        </Routes>
    
  )
}

export default App
