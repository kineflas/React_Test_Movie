import styled from 'styled-components';
import { ScrollView, View, Text } from 'react-native';
import { DARK_FONT_COLOR } from '../../constants/colors';

export const Container = styled(ScrollView)`
    display:flex;
    flex:5;
`;

export const Spacer = styled(View)`
    minHeight:50;
`;

export const StyledText = styled(Text)`
    color:${DARK_FONT_COLOR};
    fontSize: 20;
    fontWeight:bold;
    marginLeft: 25;
    marginTop:20;
`;

