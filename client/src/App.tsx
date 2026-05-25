import Landing from '@/pages/Landing';
import Login from '@/pages/Login';
import { Routes, Route } from 'react-router-dom'
export default function App() {
  return (
    <Routes>
        <Route index element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  )
}