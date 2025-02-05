import { BrowserRouter,Route,Routes,Link } from "react-router-dom";
import Note from "./notes";
export default function App_notes() {
    return(
        <>
        <Link to={"/n/"}>Notes</Link>
        <Routes>
            <Route path="/" element={<Note/>}></Route>
        </Routes>
        </>
    )
}