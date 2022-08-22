import Header from "./Components/Layout/Header";
import {useState} from 'react';
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";


function App() {
  const [cardIsshown, serCsrdIsShown] = useState(false);

  const showCarthandler = (e)=>{
    serCsrdIsShown(true);
  }

  const hideCarthandler = ()=>{
    serCsrdIsShown(false);
  }


  return (
    <CartProvider >
      {cardIsshown && <Cart onHeide = {hideCarthandler} />}
      <Header onShowcart={showCarthandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
