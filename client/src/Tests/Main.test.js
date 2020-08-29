import React from 'react';
import { shallow } from 'enzyme';
import Main from '../Screens/Main';

describe('MainComponent', () => {
    it('fetches data from server when server returns a successful response', done => { // 1
      const mockSuccessResponse = {};
      const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
      const mockFetchPromise = Promise.resolve({ // 3
        json: () => mockJsonPromise,
      });
      jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise); // 4

      const wrapper = shallow(<Main />); // 5

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith('https://reqres.in/api/users');

      process.nextTick(() => { // 6
        expect(wrapper.state()).toEqual({
          // ... assert the set state
        });

        global.fetch.mockClear(); // 7
        done(); // 8
      });
    });
  });