import styled from 'styled-components';
import { View, Image } from 'react-native';
import { LIGHT_BACKGROUND_COLOR } from '../../constants/colors';
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
    justifyContent: center;
    alignItems: flex-start;
    height:90;
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