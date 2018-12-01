import styled from 'styled-components';
import { View, TextInput } from 'react-native';
import { MAIN_COLOR, LIGHT_BACKGROUND_COLOR, FONT_COLOR } from '../../constants/colors';


export const Container = styled(View)`
    display:flex;
    flex:1;
`;

export const Content = styled(TextInput)`
    display:flex;
    backgroundColor: ${LIGHT_BACKGROUND_COLOR};
    border: solid 1px ${MAIN_COLOR};
    border-radius:3px;
    margin-top:20;
    margin-left:15px;
    margin-right:15px;
    padding-left:10px;
    padding-right:10px;
    color:${MAIN_COLOR};
`;