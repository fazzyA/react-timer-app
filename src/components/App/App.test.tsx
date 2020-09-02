import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Timer from '../Timer/Timer';

describe('App', () => {
	it('should render a <div />', () => {
		const container: any = shallow(<App />);
		expect(container.find('div').length).toEqual(1);
	});

	it('should render a <div />', () => {
		const container: any = shallow(<App />);
		expect(container.containsMatchingElement(<Timer />)).toEqual(true);
		});
	});