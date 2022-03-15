import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SearchPage } from './Components/SearchPage/SearchPage';
import { PostList } from './Components/PostList/PostList';
import { PostDetails } from './Components/PostDetails/PostDetails';
import { UserDetails } from './Components/UserDetails/UserDetails';
import { ErrorPage } from './Components/ErrorPage/ErrorPage';

export const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<SearchPage />} />
            <Route path="/postsByUser/:userId" element={<PostList />} />
            <Route path="/posts/:postId" element={<PostDetails />} />
            <Route path="/users/:userId" element={<UserDetails />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>
);
