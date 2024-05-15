import { test, expect, describe } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import Star from '../../src/Star';

describe('Star component', () => {
  test('should be unchecked originally', () => {
    render(<Star/>);
    expect(screen.getByText('☆', { exact: false })).toBeInTheDocument(); 
  });
});
