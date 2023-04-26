import './App.css';
import Form from './components/form';
import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState('dark');

  const changeTheme = ()=>{
    setTheme((curr)=> curr === 'light' ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{theme,changeTheme}}>
      <div className='App' id={theme}>
        <Form />
        <input type='checkbox' onChange={changeTheme} checked={theme === 'dark'} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
