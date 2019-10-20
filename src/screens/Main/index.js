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

            const user = {
                name: data.name,
                login: data.login,
                bio: data.bio,
                avatar: data.avatar_url,
                followers: data.followers,
                repos: data.public_repos,
                following: data.following
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
    }

    async function getUsers() {
        const usersStorage = await AsyncStorage.getItem('users');

        if (usersStorage) {
            setUsers(JSON.parse(usersStorage));
        }
    }

    function handleNavigate(item) {
        navigation.navigate('User', { item });
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
                        <Name>{ item.name || item.login }</Name>
                        <Bio>{ item.bio || 'Sem descrição' }</Bio>
                        <ProfileButton
                            onPress={() => handleNavigate(item)}
                        >
                            <ProfileButtonText>Ver perfil</ProfileButtonText>
                        </ProfileButton>
                    </User>
                )}
            />
        </Container>
    );
}