import { Route, Routes } from 'react-router-dom';
import Home from '../screens/Home';
import Creator from '../screens/Creator';
import Reader from '../screens/Reader';

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