import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    padding: 30px;
`;

export const Form = styled.View`
    flex-direction: row;
    padding-bottom: 20px;
    border-bottom-width: 1px;
    border-bottom-color: #EEEEEE;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#999999'
})`
    flex: 1;
    height: 40px;
    background: #EEEEEE;
    border-radius: 4px;
    padding: 0 15px;
    border: 1px solid #EEEEEE;
`;

export const SubmitButton = styled(RectButton)`
    justify-content: center;
    align-items: center;
    background: #20B865;
    border-radius: 4px;
    margin-left: 10px;
    padding: 0 12px;
`;
