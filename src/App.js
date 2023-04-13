import React from "react";
import { Route, Routes } from "react-router-dom";
import { Circumstancer } from "./Routes/AppCircumstancer";
import { Land } from './Routes/AppLand'

function App(){
    return (
        <Routes>
            <Route exact path="/" element={<Circumstancer />} />
            <Route exact path="/369Proyect" element={<Land />} />
        </Routes>
    )
}

export default App;