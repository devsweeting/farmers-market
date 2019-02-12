import React from 'react';
import Header from './Header/Header';
import Body from './Body/Body';

const body = {
  display: 'flex',
  justifyContent: 'center'
}

function App() {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div style={body}>
        <Body/>
      </div>


      <style jsx global>{`
          body{
            font-family: sans-serif;
            display: flex,
            justify-content: center
          }
        `}</style>
    </div>
  );
}

export default App;
