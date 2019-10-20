import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import { ActivityIndicator } from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';

import { 
    Container,
    Header,
    Avatar,
    Info,
    Content,
    NumberContent,
    NameContent,
    Name,
    Bio,
    Scroll,
    Followers,
    FollowersContainer,
    Title,
    FollowerContent,
    FollowerAvatar,
    FollowerName,
    ReposContainer,
    RepoContent,
    Top,
    TitleRepo,
    DescriptionRepo,
    Bottom,
    LanguageContent,
    LanguageColor,
    LanguageName,
    StarContent,
    NumberStars,
    ForksContent,
    NumberForks,
    StarsContainer,
    Starred,
    OwnerAvatar,
    InfoStar,
    TitleStar,
    AuthorStar
} from './styles';

export default function User({ navigation }) {
    const [user, setUser] = useState(navigation.getParam('item'));
    const [followers, setFollowers] = useState([]);
    const [repositories, setRepositories] = useState([]);
    const [starreds, setStarreds] = useState([]);
    const [loading, setLoading] = useState(false);

    async function getUser() {
        console.log(user);

        setLoading(true);

        try {
            const { data: responseStarreds } = await api.get(`/users/${user.login}/starred?page=1&per_page=10`);
            const { data: responseRepositories } = await api.get(`/users/${user.login}/repos?page=1&per_page=10`);
            const { data: responseFollowers } = await api.get(`/users/${user.login}/followers?page1&per_page=10`);

            setRepositories(responseRepositories);
            setStarreds(responseStarreds);
            setFollowers(responseFollowers);

            setLoading(false);
        } catch(err) {
            setLoading(false);
        }
    }

    function handleFormatNumbers(number, digits) {
        var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var i;

        var si = [
            { value: 1, symbol: "" },
            { value: 1E3, symbol: "k" },
            { value: 1E6, symbol: "M" },
            { value: 1E9, symbol: "G" },
            { value: 1E12, symbol: "T" },
            { value: 1E15, symbol: "P" },
            { value: 1E18, symbol: "E" }
        ];

        for (i = si.length - 1; i > 0; i--) {
            if (number >= si[i].value) {
                break;
            }
        }

        return (number / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol; 
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <Container>
            <Scroll>
                <Header>
                    <Avatar 
                        source={{ uri: user.avatar }}
                    />
                    <Name>{user.name || user.login}</Name>
                    <Bio>{user.bio || 'Sem descrição'}</Bio>
                </Header>
                <Info>
                    <Content border>
                        <NumberContent>{handleFormatNumbers(user.repos, 1)}</NumberContent>
                        <NameContent>Repositórios</NameContent>
                    </Content>
                    <Content border>
                        <NumberContent>{handleFormatNumbers(user.followers, 1)}</NumberContent>
                        <NameContent>Seguidores</NameContent>
                    </Content>
                    <Content>
                        <NumberContent>{handleFormatNumbers(user.following, 1)}</NumberContent>
                        <NameContent>Seguindo</NameContent>
                    </Content>
                </Info>
                {
                    !loading ? (
                        <>
                            {
                                followers.length !== 0 ? (          
                                    <FollowersContainer>
                                        <Title>Seguidores</Title>
                                            <Followers 
                                                data={followers}
                                                keyExtractor={follower => String(follower.id)}
                                                horizontal={true}
                                                renderItem={({ item }) => (
                                                    <FollowerContent>
                                                        <FollowerAvatar 
                                                            source={{ uri: item.avatar_url }}
                                                        />
                                                        <FollowerName>{item.login}</FollowerName>
                                                    </FollowerContent>
                                                )}
                                            />
                                    </FollowersContainer>
                                ) : null
                            }
                            {
                                repositories.length !== 0 ? (
                                    <ReposContainer>
                                        <Title>Repositórios</Title>
                                        {
                                            repositories.map(repository => (
                                                <RepoContent key={String(repository.id)}>
                                                    <Top>
                                                        <IconMaterial 
                                                            name='book-outline'
                                                            size={30}
                                                            color='#333333'
                                                        />
                                                        <TitleRepo>{repository.name}</TitleRepo>
                                                    </Top>
                                                    <DescriptionRepo>{repository.description || 'Sem descrição'}</DescriptionRepo>
                                                    <Bottom>
                                                        {
                                                            repository.language ? (
                                                                <LanguageContent>
                                                                    <LanguageColor 
                                                                        language={repository.language}
                                                                    />
                                                                    <LanguageName>{repository.language}</LanguageName>
                                                                </LanguageContent>
                                                            ) : null
                                                        }                                
                                                        <StarContent>
                                                            <IconMaterial
                                                                name='star'
                                                                size={20}
                                                                color='#999999'
                                                            />
                                                            <NumberStars>{handleFormatNumbers(repository.stargazers_count, 1)}</NumberStars>
                                                        </StarContent>
                                                        <ForksContent>
                                                            <IconAwesome 
                                                                name='code-fork'
                                                                size={20}
                                                                color='#999999'
                                                            />
                                                            <NumberForks>{handleFormatNumbers(repository.forks_count, 1)}</NumberForks>
                                                        </ForksContent>
                                                    </Bottom>
                                                </RepoContent>
                                            ))
                                        }
                                    </ReposContainer>
                                ) : null
                            }
                            {
                                starreds.length !== 0 ? (
                                    <StarsContainer>
                                        <Title style={{ marginBottom: 30 }}>Favoritos</Title>
                                        {
                                            starreds.map(starred => (
                                                <Starred key={String(starred.id)}>
                                                    <OwnerAvatar 
                                                        source={{ uri: starred.owner.avatar_url }}
                                                    />
                                                    <InfoStar>
                                                        <TitleStar>{starred.name}</TitleStar>
                                                        <AuthorStar>{starred.owner.login}</AuthorStar>
                                                    </InfoStar>
                                                </Starred>
                                            ))
                                        }
                                    </StarsContainer>
                                ) : null
                            }
                        </>
                    ) : (
                        <ActivityIndicator 
                            color='#20B865'
                            size='large'
                            style={{ marginTop: 50 }}
                        />
                    )
                }
            </Scroll>
        </Container>
    );
}