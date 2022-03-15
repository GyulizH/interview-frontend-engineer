import { render } from '@testing-library/react';
import { Input } from './Input';

describe('Input component tests', () => {
    it('should render the input component', () => {
        const { queryByPlaceholderText } = render(
            <Input placeholder="test input" />
        );
        expect(queryByPlaceholderText('test input')).toBeTruthy();
    });
});
