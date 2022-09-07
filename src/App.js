import Folder from "./Component/Folder";
import SelectedOutput from "./Component/SelectedOutput";
import Output from "./Component/Output";
import { Route } from "react-router-dom";
import './App.css';
import { useState } from "react";



const App = ()=>{
    
    const [location, setLocation]= useState(window.location.pathname);
    

    return <Route path="/" >
        <div className= "maindivision">
        <Folder />
        <Output />
        <SelectedOutput pathname= {location} />
        </div>
        
    </Route>
        
    
}
export default App;