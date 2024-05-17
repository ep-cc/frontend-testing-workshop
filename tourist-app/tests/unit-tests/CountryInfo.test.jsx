import { test, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
// App related import
import CountryInfo from '../../src/CountryInfo';


describe('CountryInfo component', () => {  
  test('displays the proper values', () => {
    // arrange
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
    // act
    render(<CountryInfo countryData={countryData}/>);
    //assert
    expect(screen.getByText('Stockholm', {exact: false})).toBeInTheDocument();
    expect(screen.getByText('Swedish krona', {exact: false})).toBeInTheDocument();
  });
});
