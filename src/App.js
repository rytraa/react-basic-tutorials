import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import NameList from './components/NameList';
import PersonList from './components/PersonList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      
      
      {/*
      Introduction:- 

      <Welcome alias = "Batman"/>
      <Greet name = "Ashwin Kumar" >
        <p> lorem Ipsum </p>
      </Greet>
      <Greet name = "Bruce Wayne" alias="Batman">
        <button>CLick me</button>
      </Greet>
      <Greet name = "Tony Stark"/>
      <Hello /> 
      */}


      {/*
       State and Props:- 

      <Message/> 
      <Counter/> 
       */}


      {/*
      Events:-

      <FunctionClick/>
      <ClassClick/>
      <EventBind/>
      */}


      {/*
      Parent-Child relation:-

      <ParentComponent/>
      */}



      {/*
      List Rendering:-

      <NameList/>
      <PersonList/>
      */}



      {/*}
      Styling Components:-

      <Stylesheet primary ={true}/>
      <Inline/>
      <h1 className='error'>Error!!!!</h1>
      <h1 className={styles.success}>Success</h1>
      */}


      <Form/>
    </div>
  );
}

export default App;
