import { Children, createContext, useEffect, useState } from "react";

export const locationContext = createContext();

const LocationProvider = ({ children }) => {
    
    const [location,setLocation] = useState()
    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async pos => {
                const { latitude, longitude } = pos.coords;
                const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
                try {
                    const res = await fetch(url);
                    const data = await res.json();
                    const exactLocation = data?.address;
                    setLocation(exactLocation)

                    // console.log('Exact Location:', exactLocation);
                } catch (error) {
                    console.error('Geolocation error:', error);
                }


            })
        }
    }
    useEffect(()=>{
        getLocation()
    },[])
    return (
        <locationContext.Provider value={{location,getLocation}}>
            {children}
        </locationContext.Provider>
    )
}
export default LocationProvider