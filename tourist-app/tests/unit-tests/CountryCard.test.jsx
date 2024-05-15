import { test, expect, describe } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import CountryCard from '../../src/CountryCard';


describe('CountryCard component', () => {
  
  test('downloads country data using API to display the proper values', async () => {
    render(<CountryCard cca3='HUN'/>);
    // this check runs before useEffect rerenders the component
    expect(screen.queryByText('Budapest', {exact: false})).not.toBeInTheDocument();

    // findBy uses waitFor, it is async
    expect(await screen.findByText('Hungarian forint', {exact: false})).toBeInTheDocument();
    expect(await screen.findByText('Budapest', {exact: false})).toBeInTheDocument();
    expect(await screen.findByText('🇭🇺')).toBeInTheDocument();
  });

  test('uses the prop in the API request', async () => {
    render(<CountryCard cca3='JPN'/>);
    expect(screen.queryByText('Tokyo', {exact: false})).not.toBeInTheDocument();
    expect(await screen.findByText('Japanese yen', {exact: false})).toBeInTheDocument();
    expect(await screen.findByText('Tokyo', {exact: false})).toBeInTheDocument();
    expect(await screen.findByText('🇯🇵')).toBeInTheDocument();
  });

});
