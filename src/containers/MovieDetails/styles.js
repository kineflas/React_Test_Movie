import styled from 'styled-components';
import { Modal, View, ImageBackground, Text, ScrollView } from 'react-native';
import { BACKGROUND_COLOR, DARK_FONT_COLOR } from '../../constants/colors';


export const Container = styled(Modal)`
    display:flex;
`;

export const Content = styled(View)`
    display:flex;
    flex:1;
    backgroundColor: ${BACKGROUND_COLOR}
`;

export const StyledImageBackground = styled(ImageBackground)`
    width:100%;
    height:50%;
`;

export const StyledText = styled(Text)`
    color:${DARK_FONT_COLOR};
    fontSize: 40;
    fontWeight:bold;
    marginLeft: 20;
    marginTop:20;
`;

export const ResumeContainer = styled(ScrollView)`
    width:100%;
    height:50%;
    paddingTop:20;
    paddingLeft:20;
`

export const Resume = styled(Text)`
    color:${DARK_FONT_COLOR};
    fontSize: 15;
    lineHeight:25;
`;