import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Chat from '../pages/Chat';


const MainRoutes = () => (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chat/:name' element={<Chat />} />
    </Routes>
);

export default MainRoutes;