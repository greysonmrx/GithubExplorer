import React, { useEffect, useState } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { 
    Container,
    Form,
    Input,
    SubmitButton
} from './styles';

export default function Main({ navigation }) {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState('');

    function handleAddUser() {
        alert(newUser);
    }

    return (
        <Container>
            <Form>
                <Input 
                    autoCorrect={false}
                    autoCapitalize='none'
                    placeholder='Adicionar usuário'
                    value={newUser}
                    onChangeText={text => setNewUser(text)}
                    returnKeyType="send"
                    onSubmitEditing={handleAddUser}
                />
                <SubmitButton
                    onPress={handleAddUser}
                >
                    <Icon 
                        name='add'
                        size={20}
                        color='#FFFFFF'
                    />
                </SubmitButton>
            </Form>
        </Container>
    );
}

Main.navigationOptions = {
    title: 'Usuários'
}