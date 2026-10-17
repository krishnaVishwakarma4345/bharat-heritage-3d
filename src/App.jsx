import { Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import HomePage from './pages/HomePage'
import ExplorePage from './pages/ExplorePage'
import MonumentPage from './pages/MonumentPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-ivory text-ink">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/monument/:slug" element={<MonumentPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
