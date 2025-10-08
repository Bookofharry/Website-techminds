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
import Application from './pages/Application'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from "./ScroolTop";
import NotFound from './pages/NotFound'
import CoursesPage from './pages/Course'
import SyllabusPage from './pages/syllabus'
import SchedulesPage from './pages/Schedule'
import CloudComputingPage from './pages/Cloud'
import FaqPage from "./pages/Faq";
import TermsAndConditions from './pages/Terms'
import PrivacyPolicy from './pages/Privacy'
import Pricing from './pages/Pricing'
// in your router



function App(){

  return (
    <BrowserRouter>
    <ScrollToTop />
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
        // routes
        <Route path="/pricing" element={<Pricing />} />


        

        
        <Route path='/' element={<Home />}/>
        <Route path='/index.html' element={<Home />}/>

        <Route path='/facilities' element={<Facilities />}/>

        <Route path='/programs/data-science' element={<DataScience/>}/>

        <Route path='/programs/coding-for-kids-engineering' element={<KidsCoding />}/>

        <Route path='/programs/digital-marketing' element={<Digital />}/>

        <Route path='/programs/software-engineering/web-development' element={<WebDev />}/>

        <Route path='/programs/software-engineering/app-development' element={<AppDev />}/>

        <Route path='/contact' element={<Contact/>}/>

        <Route path="/privacy" element={<PrivacyPolicy />} />

      
        <Route path='/application' element={<Application/>}/>

        <Route path='/programs' element={<CoursesPage />}/>

        <Route path='/syllabus' element={<SyllabusPage />}/>
        <Route path="/faq" element={<FaqPage />} />

        <Route path='/schedule' element={<SchedulesPage />}/>

        <Route path='/programs/cloud-computing' element={ <CloudComputingPage />}/>

        <Route path="*" element={<NotFound />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        



      </Routes>
      <Footer onSubscribe={(email) => {
        // do anything here:
        // send to API, analytics, show modal, etc.
       
      }} />
    
    </BrowserRouter>
  )
}

export default App
