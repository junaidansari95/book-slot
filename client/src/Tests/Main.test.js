import React from 'react';
import { shallow } from 'enzyme';
import Main from '../Screens/Main';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('MainComponent', () => {
    it('fetches data from server when server returns a successful response', done => {
      const mockSuccessResponse = {};
      const mockJsonPromise = Promise.resolve(mockSuccessResponse);
      const mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise,
      });
      jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

      const wrapper = shallow(<Main />);

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith('https://reqres.in/api/users');

      process.nextTick(() => {
        expect(wrapper.state()).toEqual({
        //  assert the set state
        });

        global.fetch.mockClear();
        done();
      });
    });
  });