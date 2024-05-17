import { test, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import CountryInfo from '../../src/CountryInfo';


describe('CountryInfo component', () => {
  
  test('displays the proper values', () => {
    const countryData = {
      'name': {
          'common': 'Sweden',
          'official': 'Kingdom of Sweden',
        },
        'cca3': 'SWE',
        'currencies': {
          'SEK': {
            'name': 'Swedish krona',
            'symbol': 'kr'
          }
        },
        'capitals': [
          'Stockholm'
        ],
        'region': 'Europe',
        'subregion': 'Northern Europe',
    };
    render(<CountryInfo countryData={countryData}/>);
    expect(screen.getByText('Stockholm', {exact: false})).toBeInTheDocument();
    expect(screen.getByText('Swedish krona', {exact: false})).toBeInTheDocument();
  });

});
