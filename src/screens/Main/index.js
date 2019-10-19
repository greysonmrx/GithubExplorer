import React, { useEffect, useState } from 'react';

import { Keyboard, ActivityIndicator } from 'react-native';
import api from '../../services/api';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';

import { 
    Container,
    Form,
    Input,
    SubmitButton,
    List,
    User,
    Avatar,
    Name,
    Bio,
    ProfileButton,
    ProfileButtonText
} from './styles';

export default function Main({ navigation }) {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleAddUser() {
        setLoading(true);

        try {
            const { data } = await api.get(`/users/${newUser}`);

            console.log(data);

            const user = {
                name: data.name,
                login: data.login,
                bio: data.bio,
                avatar: data.avatar_url
            };

            setUsers(lastUsers => [...lastUsers, user]);
            setNewUser('');
            Keyboard.dismiss();

            setLoading(false);
        } catch(err) {
            alert('Usuário não encontrado!');
            setLoading(false);
        }
    }

    async function handleUsersUpdate() {
        await AsyncStorage.setItem('users', JSON.stringify(users));
        console.log(`Guardou!`);
    }

    async function getUsers() {
        const usersStorage = await AsyncStorage.getItem('users');

        if (usersStorage) {
            setUsers(JSON.parse(usersStorage));
            console.log(JSON.parse(usersStorage));
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => {
        handleUsersUpdate();
    }, [users]);
        
    return (
        <Container>
            <Form>
                <Input 
                    autoCorrect={false}
                    autoCapitalize='none'
                    placeholder='Adicionar usuário'
                    value={newUser}
                    onChangeText={text => setNewUser(text)}
                    returnKeyType='send'
                    onSubmitEditing={handleAddUser}
                />
                <SubmitButton
                    onPress={handleAddUser}
                    loading={loading}
                >
                    {
                        loading ? (
                            <ActivityIndicator 
                                color='#FFFFFF'
                            />
                        ) : (
                            <Icon 
                                name='add'
                                size={20}
                                color='#FFFFFF'
                            />
                        )
                    }                    
                </SubmitButton>
            </Form>
            <List 
                data={users}
                keyExtractor={user => user.login}
                renderItem={({ item }) => (
                    <User>
                        <Avatar 
                            source={{ uri: item.avatar }}
                        />
                        <Name>{ item.name }</Name>
                        <Bio>{ item.bio }</Bio>
                        <ProfileButton
                            onPress={() => {}}
                        >
                            <ProfileButtonText>Ver perfil</ProfileButtonText>
                        </ProfileButton>
                    </User>
                )}
            />
        </Container>
    );
}

Main.navigationOptions = {
    title: 'Usuários'
}