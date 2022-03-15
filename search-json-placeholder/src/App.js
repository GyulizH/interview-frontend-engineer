import './App.css';
import AppRoutes from './Routes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from './Store/Actions/user';
import { fetchPosts } from './Store/Actions/post';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <div className="App">
            <AppRoutes />
        </div>
    );
};

export default App;
