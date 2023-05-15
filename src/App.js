import './assets/scss/master.scss'
import Home from './components/Home';
import Profile from './components/Profile';
import ProfileFunction from './components/ProfileFunction';


function App() {

  return (
    <div className="App">
      <h1>Welcome to my app</h1>
      <Home text="Home Component With Props" />
      {/* <Profile text={{name:'Palak'}} data="Palak Profile Data" />
      <Profile text={{name:'Maulik'}} data="Maulik Profile Data" /> */}
      <Profile />
      <ProfileFunction />
    </div>
  );
}

export default App;