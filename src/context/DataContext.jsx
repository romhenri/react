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
  );
  const [account, setAccount] = useState(
    () => JSON.parse(localStorage.getItem('account'))
  );

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);
  useEffect(() => {
    console.log(account);
    localStorage.setItem('account', JSON.stringify(account));
  }, [account]);

  // if (process.env.NODE_ENV === 'development')

  const value = useMemo(() => ({
    darkMode, setDarkMode,
    account, setAccount 
  }), [darkMode, account]);

  return (
    <DataContext.Provider 
      value={value}>
    {children}
    </DataContext.Provider>
  );
};

export default DataContext;