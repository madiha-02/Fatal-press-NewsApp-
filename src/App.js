import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App=()=> {
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress,setProgress]=useState(0)
   return (
      <Router>
        <div>
          <Navbar />
          <LoadingBar color='#f11946' height={3} progress={progress} />
          <Routes>
            <Route key="home" path='/home' element={<News setProgress={setProgress} apiKey={apiKey} key='home' pageSize={9} country='us' category='General' />}></Route>
            <Route key="business" path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key='business' pageSize={9} country='us' category='Business' />}></Route>
            <Route key="entertainment" path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' pageSize={9} country='us' category='Entertainment' />}></Route>
            <Route key="health" path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key='health' pageSize={9} country='us' category='Health' />}></Route>
            <Route key="science" path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key='science' pageSize={9} country='us' category='Science' />}></Route>
            <Route key="sports" path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={9} country='us' category='Sports' />}></Route>
            <Route key="technology" path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key='technology' pageSize={9} country='us' category='Technology' />}></Route>
        </Routes>
        </div>
      </Router>
    );
  
}

export default App;
















