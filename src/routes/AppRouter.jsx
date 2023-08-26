import { Route, Routes } from 'react-router-dom';
import Home from '../screens/home';
import Creator from '../screens/creator';
import Reader from '../screens/reader';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/creator" element={<Creator />} />
            <Route path="/reader" element={<Reader />} />
        </Routes>
    );
}

export default AppRouter;