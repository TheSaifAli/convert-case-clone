import Login from './components/Login.js'
import TextForm from './components/TextForm';
import Header from './components/Header';
import DarkMode from './components/DarkMode';

function App() {
  return (
    <div className="App">
     {/* <Login type="email" placeholder='email'/> */}
     

     <Header/>
     <TextForm />
     <DarkMode/>
    </div>
  );
}

export default App;
