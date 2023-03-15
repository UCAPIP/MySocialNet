import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import './css/style.css';
import Dialogs from './components/Dialogs/Dialogs';
import { Routes, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';




const App = () => {
  
  return (
      <main>
        <div className='app-wrapper'>
          <Header />
          <Nav />
          <div className='content'>
            <Routes>
              <Route path='/profile' 
              element={<Profile />}></Route>
              <Route path='/dialogs/*' 
              element={<Dialogs />}></Route>
              <Route path='/news' 
              element={<News />}></Route>
              <Route path='/music' 
              element={<Music />}></Route>
              <Route path='/settings' 
              element={<Settings />}></Route>
            </Routes>
          </div>
        </div>
      </main>
  );
}

export default App;

