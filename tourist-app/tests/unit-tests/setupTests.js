// Vitest configuration
import { expect, afterAll, afterEach, beforeAll } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
// Add jest-dom matchers to expect, so we can use DOM-matchers such as `toHaveTextContent` etc.
expect.extend(matchers);

// MSW configuration
import { setupServer } from 'msw/node';
import { HttpResponse, http } from 'msw';

// App related imports
import { API_URL } from '../../src/api';

const countries = [
  {
    'cca3': 'HUN',
    'name': {
      'common':'Hungary',
      'official':'Hungary',
      'nativeName':{'hun':{'common':'Magyarország','official':'Magyarország'}}
    },
    'currencies': {
      'HUF':{'name':'Hungarian forint','symbol':'Ft'}
    },
    'capitals': ['Budapest'],
    'flag':'🇭🇺',
  },
  {
    'cca3': 'ESP',
    'name': {
      'common':'Spain',
      'official':'Kingdom of Spain',
      'nativeName':{'spa':{'common':'España','official':'Reino de España'}}
    },
    'currencies':{
      'EUR':{'name':'Euro','symbol':'€'}
    },
    'capitals': ['Madrid'],
    'flag':'🇪🇸',
  },
  {
    'cca3': 'JPN',
    'name':{
      'common':'Japan',
      'official':'Japan',
      'nativeName':{'jpn':{'common':'日本','official':'日本'}}
    },
    'currencies': {
      'JPY':{'name':'Japanese yen','symbol':'¥'}
    },
    'capitals': ['Tokyo'],
    'flag':'🇯🇵',
  }
];

export const restHandlers = [
  http.get(`${API_URL}/by-cca3/:cca`, (request) => {
    const cca = request.params.cca;
    const  countryData = countries.find(c => c.cca3 === cca.toUpperCase());
    return HttpResponse.json(countryData);
  }),
]

const server = setupServer(...restHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());
