import styled from 'styled-components';
import { View, Text } from 'react-native';
import { WIN_WIDTH } from '../../constants/dimensions';
import { LIGHT_BACKGROUND_COLOR, MAIN_COLOR } from '../../constants/colors';


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
    alignItems: center;
    height:90;
    width:${WIN_WIDTH - 30};
    margin-left:15px;
    margin-right:15px;
    padding-left:15px;
    backgroundColor: ${LIGHT_BACKGROUND_COLOR};
    border-radius:3px;
`;

export const StyledText = styled(Text)`
    color:${MAIN_COLOR};
`;