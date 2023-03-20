import React from 'react';
// import { Counter } from './features/counter/Counter';
import './sass/App.sass';
import Card from './components/Card';
import Form from './components/Form';


function App() {
  return (
    <>
      <div className="wrapper">
        <div className="wrapper-under">
          <Card />
          <Form />
        </div>
      </div>
    </>
  );
}

export default App;
