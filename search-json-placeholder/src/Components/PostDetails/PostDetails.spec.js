import { render, screen, act } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import PostDetails from './PostDetails';

jest.mock('react-router-dom', () => ({
    useParams: jest.fn()
}));

global.fetch = () => {
    return Promise.resolve({
        json: () =>
            Promise.resolve({
                userId: 1,
                id: 1,
                title: 'TEST TITLE',
                body: 'quia et suscipit'
            })
    });
};

const mockUseParams = useParams;

describe('Input component tests', () => {
    it('should render the input component', async () => {
        mockUseParams.mockReturnValue({ postId: '1' });
        await act(async () => render(<PostDetails />));
        expect(screen.getByText('TEST TITLE')).toBeInTheDocument();
    });
});
