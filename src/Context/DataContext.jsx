import { createContext, useState } from "react";
import {useLocalStorage} from '../Components/useLocalStorage'
export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [products, setProducts] = useLocalStorage("data",[]);
  const [newProducts, setNewProducts] = useLocalStorage("newData",[]);
  const [filtrar, setFiltrar] = useState([])
  const getProducts = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/`);
    const data = await res.json();
    setProducts(data);
    setFiltrar(data)
  };
  return (
    <DataContext.Provider
      value={{ getProducts, products,setProducts, newProducts, setNewProducts,filtrar }}
    >
      {children}
    </DataContext.Provider>
  );
};
