import NavBar from './compo/navbar'
import KidsCoding from './pages/KidsCoding'
import AppDev from './pages/AppDevelopment'
import Contact from './pages/Contact'
import DataScience from './pages/DataScience'
import Digital from './pages/DigitalMarketing'
import Facilities from './pages/Facilities'
import Home from './pages/Home'
import WebDev from './pages/WebDevelopment'
import Footer from './compo/footer'
import Mail from './pages/Mail'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App(){

  return (
    <BrowserRouter>
      {/* Navigation Bar Needs to be Worked On */}
      <nav>
        <NavBar/>  
        {/* <MyButton /> */}
      </nav>





      {/* All Our APP Routes */}

      <Routes>

        {/* For now just h1 route no home yet */}
        {/* Done the Nav Bar And Successfully Linked All the Routes */}
        {/* Linked Coding for kids Page */}
        {/* Created Footer */}
        {/* Working on Facilities */}
        {/* Working on Home Page */}
        {/* Created Skills Component */}

        <Route path='/' element={<Home />}/>

        <Route path='/facilities' element={<Facilities />}/>

        <Route path='/programs/data-science' element={<DataScience/>}/>

        <Route path='/programs/coding-for-kids-engineering' element={<KidsCoding />}/>

        <Route path='/programs/digital-marketing' element={<Digital />}/>

        <Route path='/programs/software-engineering/web-development' element={<WebDev />}/>

        <Route path='/programs/software-engineering/app-development' element={<AppDev />}/>

        <Route path='/contact' element={<Contact/>}/>

        <Route path='/mail' element={<Mail />}/>


      </Routes>
      <br /><br />
      <Footer />
    
    </BrowserRouter>
  )
}

export default App
