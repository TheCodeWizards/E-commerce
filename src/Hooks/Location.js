import { useContext } from "react";
import  { locationContext } from "../context/LocationContext";

const useLocation = ()=> useContext(locationContext)

export default useLocation;