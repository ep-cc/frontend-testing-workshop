import { test, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Star from '../../src/Star';
import userEvent from '@testing-library/user-event';

describe('Star component', () => {
  test('should be unchecked originally', () => {
    render(<Star/>);
    expect(screen.getByText('☆')).toBeInTheDocument();
    expect(screen.queryByText('★')).not.toBeInTheDocument();
  });

  test('should be checked after one click', async () => {
    const user = userEvent.setup();
    render(<Star/>);
    const starDiv = screen.getByTitle('star');
    await user.click(starDiv);
    expect(screen.getByText('★')).toBeInTheDocument();
    expect(screen.queryByText('☆')).not.toBeInTheDocument();
  });

  test('should be unchecked after two clicks', async () => {
    const user = userEvent.setup();
    render(<Star/>);
    const starDiv = screen.getByTitle('star');
    await user.click(starDiv);
    await user.click(starDiv);
    expect(screen.getByText('☆')).toBeInTheDocument();
    expect(screen.queryByText('★')).not.toBeInTheDocument();
  });
});
