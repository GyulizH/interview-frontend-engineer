import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PostDetails } from './PostDetails';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(() => jest.fn()),
    useSelector: jest.fn()
}));

jest.mock('react-router-dom', () => ({
    useParams: jest.fn()
}));

const mockUseParams = useParams;
const mockUseSelector = useSelector;
const mockUseDispatch = useDispatch;

describe('PostDetails component tests', () => {
    it('should render the postdetails component', async () => {
        const promise = Promise.resolve();
        mockUseDispatch.mockReturnValue(() => promise);
        mockUseParams.mockReturnValue({ postId: '1' });
        mockUseSelector.mockReturnValue({
            title: 'TEST TITLE',
            body: 'mockBody'
        });
        render(<PostDetails />);
        expect(screen.getByText('TEST TITLE')).toBeInTheDocument();
        await act(() => promise);
    });
});
