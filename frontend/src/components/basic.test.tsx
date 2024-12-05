//@vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

const TestComponent = () => <div>Hello, World!</div>;

describe('TestComponent', () => {
  it('renders the text "Hello, World!"', () => {
    render(<TestComponent />);
    const element = screen.getByText('Hello, World!');
    expect(element).toBeInTheDocument();
  });
});
