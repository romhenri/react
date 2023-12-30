import {
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const DataContext = createContext(null);

export const DataContextProvider = (
  {children}
) => {
  const [darkMode, setDarkMode] = useState(
    () => JSON.parse(localStorage.getItem('darkMode'))
  )

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // if (process.env.NODE_ENV === 'development')

  const value = useMemo(() => ({ darkMode, setDarkMode }), [darkMode]);

  return (
    <DataContext.Provider 
      value={value}>
    {children}
    </DataContext.Provider>
  )
}

export default DataContext;