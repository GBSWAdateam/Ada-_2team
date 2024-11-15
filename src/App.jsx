import React from "react";
import LoginForm from "./pages/login";
import Signup from "./pages/signup";
import Description from "./pages/Description";
import SavePath from "./pages/SavePath";
import Main from "./pages/Main";

import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <Main />
        </div>
    );
}
// function App() {
//     return (
//         <Routes>
//             <Route path="/" element={<Main />} />
//             <Route path="zigtongDesc" element={<Description />} />
//             <Route path="savePath" element={<SavePath />} />
//         </Routes>
//     );
// }

export default App;
