import Landing from '@/pages/Landing';
import Login from '@/pages/Login';
import AdminLogin from '@/pages/admin/Login';
import Vote from '@/pages/user/Vote';
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
        <Route index element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/vote" element={<Vote />} />
      </Routes>
  )
}