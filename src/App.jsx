import { useState } from 'react'
import Navbar from './components/Navbar'
import LoadingBar from 'react-top-loading-bar'
import News from './components/News'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

const App = () => {
  const apiKey = import.meta.env.VITE_NEWS_API
  const [progress, setProgress] = useState(0)
  return (
    <Router>
      <div>
        <Navbar />
        <LoadingBar color='#f11946' height={3} progress={progress} />
        <Routes>
          <Route path='/' element={<Navigate to='/home' replace />}></Route>
          <Route path='/home' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={9} country='us' category='General' />}></Route>
          <Route path='/business' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={9} country='us' category='Business' />}></Route>
          <Route path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={9} country='us' category='Entertainment' />}></Route>
          <Route path='/health' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={9} country='us' category='Health' />}></Route>
          <Route path='/science' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={9} country='us' category='Science' />}></Route>
          <Route path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={9} country='us' category='Sports' />}></Route>
          <Route path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={9} country='us' category='Technology' />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
