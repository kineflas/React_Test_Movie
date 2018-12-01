import styled from 'styled-components';
import { View } from 'react-native';
import { BACKGROUND_COLOR } from '../../constants/colors';
import { WIN_HEIGHT } from '../../constants/dimensions';


export const Container = styled(View)`
    display:flex;
    flex-direction:column;
    flex:1;
    backgroundColor: ${BACKGROUND_COLOR};
    min-height:${WIN_HEIGHT};
`;