import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import './css/style.css';
import Dialogs from './components/Dialogs/Dialogs';
import { Routes, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Registration from './components/Registration(Login)/Registration';
import Login from './components/Registration(Login)/Login';
import UsersContainer from './components/Users/UsersContainer';




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
              <Route path='/AllUsers' 
              element={<UsersContainer />}></Route>
              <Route path='/settings' 
              element={<Settings />}></Route>
              <Route path='/registration' 
              element={<Registration />}></Route>
              <Route path='/login' 
              element={<Login />}></Route>
            </Routes>
          </div>
        </div>
      </main>
  );
}

export default App;

