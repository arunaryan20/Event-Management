import UpdateProfile from "./components/UpdateProfile"
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import MyProfile from "./components/MyProfile"
import Home from "./components/Home"
import AllForm from "./components/AllForm"
import AssetsView from "./components/AssetsView"
import { BrowserRouter,Route,Routes } from "react-router-dom"

function App () {
  return (
    <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="my-profile" element={<MyProfile />} />
            <Route path="update-profile" element={<UpdateProfile />} />
            <Route path="asset-view" element={<AssetsView />} />
            <Route path="update-asset" element={<AllForm />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
