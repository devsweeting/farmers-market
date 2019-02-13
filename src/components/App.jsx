import React from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import Grid from '@material-ui/core/Grid';
import Table from './Body/Table';

function App() {
  return (
    <div >
      <Grid justify="center">
        <Header/>
        <Table/>
        <Body/>
    </Grid>

      <style jsx global>{`
          body{
            font-family: sans-serif;
            margin-top: 100px;
            margin-left: 450px;
            background-color: slategrey;
          }
        `}</style>
    </div>
  );
}

export default App;
