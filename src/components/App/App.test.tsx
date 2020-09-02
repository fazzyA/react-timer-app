import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Timer from '../Timer/Timer';

describe('App', () => {
	// it('should render a display comp', () => {
	// 	const container: any = shallow(<App />);
	// 	expect(container.containsMatchingElement('<DisplayComponent />')).toEqual(true);
	// });
	it('should render a display comp', () => {
		const container: any = shallow(<App />);
		expect(container.find('p').length).toEqual(1);
	});

	it('should render a <div>', () => {
		const container2: any = shallow(<App />);
		expect(container2.find('div').length).toBeGreaterThan(1);
		});
	});