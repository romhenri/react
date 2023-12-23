import React from "react";

const DataContext = React.createContext(null);

export const DataContextProvider = (
  {children}
) => {
  const [darkMode, setDarkMode] = React.useState(true)

  return (
    <DataContext.Provider 
      value={{darkMode, setDarkMode}}>
    {children}
    </DataContext.Provider>
  )
}

export default DataContext;