// This helps to check if the pathname is the same as the location.pathname
import { useState, useEffect} from "react"



const Router= ({path, children}) => {
   const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(() => {
       window.addEventListener('popstate', function() {
          setCurrentPath(window.location.pathname)
       })},[]);

   return currentPath === path? children : null
}

export default Router