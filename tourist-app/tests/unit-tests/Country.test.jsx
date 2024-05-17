import { test, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Country from '../../src/Country';


describe('Country component', () => {
  
  test('uses path parameter for country code', async () => {
    // emulate browser routes in memory
    // the last element in initialEntries will be the current route
    render(
      <MemoryRouter initialEntries={['/country/HUN']}>
        <Routes>
          <Route path='/country/:cca3' element={<Country/>}></Route>
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('Country info')).toBeInTheDocument();
    expect(screen.queryByText('Budapest', {exact: false})).not.toBeInTheDocument();

    // findBy uses waitFor, it is async
    expect(await screen.findByText('Hungarian forint', {exact: false})).toBeInTheDocument();
    expect(await screen.findByText('Budapest', {exact: false})).toBeInTheDocument();
    expect(await screen.findByText('🇭🇺')).toBeInTheDocument();
  });
});
