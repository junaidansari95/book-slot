import React from 'react';
import { shallow } from 'enzyme';
import AllSlots from '../Screens/AllSlots';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('MainComponent', () => {
    it('fetches data from server when server returns a successful response', done => { // 1
      const mockSuccessResponse = {};
      const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
      const mockFetchPromise = Promise.resolve({ // 3
        json: () => mockJsonPromise,
      });
      jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise); // 4

      const wrapper = shallow(<AllSlots />); // 5

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith('http://localhost:5000/api/v1/users/');

      process.nextTick(() => { // 6
        expect(wrapper.state()).toEqual({
          // ... assert the set state
        });

        global.fetch.mockClear(); // 7
        done(); // 8
      });
    });
  });