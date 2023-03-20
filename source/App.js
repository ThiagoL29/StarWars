import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './styles/App.css';
import Layout from './components/Layout';
import Home from '../pages/Home';
import Films from '../pages/Films';
import People from '../pages/People';
import Planets from '../pages/Planets';
import Species from '../pages/Species';
import Starships from '../pages/Starships';
import Vehicles from '../pages/Vehicles';

const App = () => (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="filmes" element={<Films />} />
            <Route path="pessoas" element={<People />} />
            <Route path="planetas" element={<Planets />} />
            <Route path="especies" element={<Species />} />
            <Route path="naves" element={<Starships />} />
            <Route path="veiculos" element={<Vehicles />} />
        </Route>
    </Routes>
)

export default App;