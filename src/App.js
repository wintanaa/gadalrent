import Home from "./pages/Home";
import {BrowserRouter,Route,Routes } from 'react-router-dom'
import { BsTelephoneFill} from 'react-icons/bs'
import Detail from "./pages/Detail";
import Property from "./pages/Property";
import PropertyDetail from "./pages/PropertyDetail";
import Payment from "./pages/Payment";
import UserProfile from "./pages/UserProfile";
import Estimation from "./pages/Estimation";
import Message from "./pages/Message";
function App() {
  return (


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>        
        <Route path="/detail" element={<Detail />}/>
        <Route path="/property" element={<Property />}/>
        <Route path="/propertydetail" element= {<PropertyDetail/>}/>
        <Route path="/payment" element= {<Payment/>}/>
        <Route path="/userprofile" element= {<UserProfile/>}/>
        <Route path="/estimation" element= {<Estimation/>}/>

        <Route path="/message" element= {<Message/>}/>

      </Routes>
     
    <div className="md:w-12 md:h-12 h-8 w-8  flex bg-blue-500 bottom-8  right-6  fixed items-center justify-center rounded-xl z-10 ">
      <BsTelephoneFill className="md:w-6 md:h-6 h-4 w-4  text-white "/>
      </div>
    </BrowserRouter>

  );
}

export default App;
