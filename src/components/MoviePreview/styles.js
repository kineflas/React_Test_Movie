import styled from 'styled-components';
import { View, Image, Text } from 'react-native';
import { LIGHT_BACKGROUND_COLOR, DARK_FONT_COLOR, MAIN_COLOR } from '../../constants/colors';
import { WIN_WIDTH } from '../../constants/dimensions';


export const Container = styled(View)`
    display:flex;
    justifyContent: center;
    alignItems: center;
    height:100;
    width:${WIN_WIDTH};
`;

export const Content = styled(View)`
    display:flex;
    justifyContent: flex-start;
    alignItems: center;
    height:90;
    flexDirection:row;
    flexWrap: nowrap;
    width:${WIN_WIDTH - 30};
    margin-left:15px;
    margin-right:15px;
    padding-left:15px;
    backgroundColor: ${LIGHT_BACKGROUND_COLOR};
    border-radius:3px;
`;

export const MovieImage = styled(Image)`
    width:70;
    height:70;
    border-radius:3px;
`;

export const MovieTitle = styled(Text)`
    flex:1;
    color:${MAIN_COLOR}
    margin-left:15px;
`;