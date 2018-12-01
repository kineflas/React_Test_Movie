import styled from 'styled-components';
import { View, TextInput } from 'react-native';
import { MAIN_COLOR, LIGHT_BACKGROUND_COLOR, FONT_COLOR } from '../../constants/colors';


export const Container = styled(View)`
    display:flex;
    flex:1;
    backgroundColor: ${LIGHT_BACKGROUND_COLOR};
    minHeight:80;
    margin-left:15px;
    margin-right:15px;
    margin-top:10px;
`;