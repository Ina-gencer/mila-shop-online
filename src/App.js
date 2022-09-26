import './App.css';
import Footer from './Components/Cart/Footer';
import NavBar from './Components/Cart/NavBar';
import AllCaterories from './Components/Filter/AllCaterories';
import Products from './Components/ProductsComponents/Products';


function App() {
  return (
    <div >
      <NavBar/>
    <div className='App-header'>
      <AllCaterories />
      <Products  />  
    </div>   
    <Footer/>  

    </div>
  );
}

export default App;
