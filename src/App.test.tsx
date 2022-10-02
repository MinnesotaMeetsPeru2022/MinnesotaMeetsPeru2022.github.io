import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

test('that Jest is working', () => {
    expect(true).toBe(true);
    expect.assertions(1);
});

test('App renders', () => {
    const { container, findByText } = render(<App />);

    expect(findByText('Vite-React-TypeScript-Skeleton')).toBeInTheDocument();
    expect.assertions(1);
});
