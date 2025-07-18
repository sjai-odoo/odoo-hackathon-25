import { Routes, Route } from 'react-router-dom'
import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home'
import Questions from './pages/Questions/Questions'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import DisplayQuestion from './pages/Questions/DisplayQuestion'
import Tags from './pages/Tags/Tags'
import Users from "./pages/Users/Users"
import UserProfile from "./pages/UserProfile/UserProfile"
import AdminDashboard from "./pages/Admin/AdminDashboard"

const AllRoutes = ({ HomeMainbarComponent }) => {
  return (
    <Routes>
      <Route path='/' element={<Home HomeMainbarComponent={HomeMainbarComponent} />} />
      <Route path='/Auth' element={<Auth />} />
      <Route path='/AskQuestion' element={<AskQuestion />} />
      <Route path='/Questions' element={<Questions />} />
      <Route path='/Questions/:id' element={<DisplayQuestion />} />
      <Route path='/Tags' element={<Tags />} />
      <Route path='/Users' element={<Users />} />
      <Route path='/Users/:id' element={<UserProfile />} />
      <Route path='/admin' element={<AdminDashboard />} />
    </Routes>
  )
}

export default AllRoutes