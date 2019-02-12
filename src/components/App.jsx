import React from 'react';
import Header from './Header/Header';
import Body from './Body/Body';

function App() {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div>
        <Body/>
      </div>


      <style jsx global>{`
          body{
            font-family: sans-serif;
          }
        `}</style>
    </div>
  );
}

export default App;
