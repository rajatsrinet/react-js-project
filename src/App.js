import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';

function App() {
   
  return (
    <div className="App">
      <Header/>
      <div className='container'>
        <h1 className='text-danger'>Welcome to react js</h1>

      </div>
      <Card/>
      <Footer/>
       
    </div>
  );
}

export default App;
