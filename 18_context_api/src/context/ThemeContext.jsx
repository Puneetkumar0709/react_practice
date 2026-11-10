import React, { createContext } from 'react'

export const ThemeDataContext=createContext() //step 1 :-create context

const ThemeContext = (props) => {
  return (
    <div>
       
      {/* Step 2 :- providing context data */}
      
      <ThemeDataContext.Provider value='Puneet'>
        {props.children}
      </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext