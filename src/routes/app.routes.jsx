import { Routes, Route } from 'react-router-dom';

import { Home } from '../Pages/Home';
import { Movie } from '../Pages/Movie';
import { NewMovie } from '../Pages/NewMovie';
import { Profile } from '../Pages/Profile';

export function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/newmovie' element={<NewMovie/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/movie/:id' element={<Movie/>} />
        </Routes>
    )
}