import React from 'react';
import Todo from './components/Todo';
import './App.scss';


export default function App() {
  return (
    <div className="app">
      <header className='header'>What do you need to do?</header>
        <Todo />
    </div>
  )
}
