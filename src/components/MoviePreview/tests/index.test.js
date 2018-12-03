import React from 'react';
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TouchableOpacity } from 'react-native';

import MoviePreview from '../index';
import { Container, Content } from '../styles';

configure({ adapter: new Adapter() });

describe('MoviePreview:', () => {
    describe('index.js:', () => {
        const props = {
            movie: {
                item: {
                    poster_path: 'fakePosterPath'
                }
            },
            baseUrl: 'fakeBaseUrl',
            handleLoadMovie: () => {}
        }
        const wrapper = shallow(<MoviePreview {...props}/>);
        it('ShouldFind a single TouchableOpacity', () => {
            expect(wrapper.find(TouchableOpacity).length).toBe(1);
        });
        it('ShouldFind a single Container', () => {
            expect(wrapper.find(Container).length).toBe(1);
        });
        it('ShouldFind a single Content', () => {
            expect(wrapper.find(Content).length).toBe(1);
        });
    });
});