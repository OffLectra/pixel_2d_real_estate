import React from 'react';
import { PageWrapperComponent } from './components/MainPage/MainPage';

// const MyC: React.FC = {   // эта конструкция для TS
//   return ();
// };

function App() {              // эта конструкция для JS
  return (
    <div className="App">
      <PageWrapperComponent />

    </div>  
  );
}

export default App;