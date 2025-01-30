import Contact from "./contact";
import { Route, Routes, Link } from "react-router-dom";
export default function App_contact() {
    return(
        <>
        <Link to={"/c/"}>Contact</Link>
        <Routes>
            <Route path="/" element={<Contact/>}></Route>
        </Routes>
        </>
    )
    
}