import React from 'react';
import { PageWrapperComponent } from './components/MainPage/MainPage';
import { ShopcartComponent } from './components/ShopCartPopUp/ShopCart';

// const MyC: React.FC = {   // эта конструкция для TS
//   return ();
// };

function App() {              // эта конструкция для JS
  return (
    <div className="App">
      <PageWrapperComponent />
      <ShopcartComponent />

    </div>  
  );
}

export default App;