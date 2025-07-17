import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    const fetchAllProducts = async () => {
        const url = 'https://fakestoreapi.in/api/products?limit=150'
        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error(`Response status: ${res.status}`);
            }
            const result = await res.json();
            setData(result.products);
        }

        catch (error) {
            console.error(error.message);
        }
        finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchAllProducts()
    }, [])
    return (
        <DataContext.Provider value={{setData, data, loading ,fetchAllProducts}}>
            {children}
        </DataContext.Provider>
    )

}
export default DataProvider