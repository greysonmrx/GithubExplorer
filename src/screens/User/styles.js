import styled from 'styled-components/native';

import Colors from '../../config/ColorsGithub.json';

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    align-items: center;
    padding-bottom: 20px;
    border-bottom-width: 1px;
    border-color: #EEEEEE;
`;

export const Avatar = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background: #EEEEEE;
`;

export const Name = styled.Text`
    font-family: 'Product Sans Bold';
    font-size: 20px;
    color: #333333;
    margin-top: 10px;
`;

export const Bio = styled.Text`
    font-family: 'Product Sans Regular';
    font-size: 14px;
    line-height: 18px;
    color: #999999;
    margin-top: 5px;
    text-align: center;
`;

export const Info = styled.View`
    flex-direction: row;
    padding: 20px;
    border-bottom-width: 1px;
    border-color: #EEEEEE;
    margin-bottom: 30px;
`;

export const Content = styled.View`
    flex: 1;
    border-right-width: ${props => props.border ? 1 : 0}px;
    border-right-color: #EEEEEE;
    align-items: center;
`;

export const NumberContent = styled.Text`
    font-family: 'Product Sans Bold';
    font-size: 16px;
    color: #333333;
`;

export const NameContent = styled.Text`
    font-family: 'Product Sans Regular';
    font-size: 14px;
    color: #707070;
    margin-top: 5px;
`;


export const Scroll = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false
})`
    flex: 1;
    padding: 30px;
`;

export const FollowersContainer = styled.View`
    margin-bottom: 30px;
`;

export const Followers = styled.FlatList.attrs({
    showsHorizontalScrollIndicator: false
})`
    margin-top: 10px;
`;

export const Title = styled.Text`
    font-family: 'Product Sans Bold';
    font-size: 20px;
    color: #20B865;
    margin-bottom: 10px;
`;

export const FollowerContent = styled.View`
    width: 100px;
    height: 100px;
    align-items: center;
    margin-right: 8px;
`;

export const FollowerAvatar = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 32px;
    background: #EEEEEE;
`;

export const FollowerName = styled.Text.attrs({
    numberOfLines: 1
})`
    font-family: 'Product Sans Regular';
    font-size: 14px;
    color: #333333;
    margin-top: 10px;
    text-align: center;
`;

export const ReposContainer = styled.View`
    margin-bottom: 30px;
`;

export const RepoContent = styled.View`
    margin: 15px 0;
    border-bottom-width: 1px;
    border-color: #EEEEEE;
`;

export const Top = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const TitleRepo = styled.Text.attrs({
    numberOfLines: 1
})`
    font-family: 'Product Sans Bold';
    font-size: 17px;
    color: #333333;
    margin-left: 10px;
`;

export const DescriptionRepo = styled.Text`
    font-family: 'Product Sans Regular';
    margin: 20px 0;
`;

export const Bottom = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`;

export const LanguageContent = styled.View`
    flex-direction: row;
    align-items: center;
    align-self: center;
    margin-right: 20px;
`;

export const LanguageColor = styled.View`
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background: ${props => Colors[props.language].color};
    margin-right: 5px;
`;

export const LanguageName = styled.Text`
    font-family: 'Product Sans Regular';
`;

export const StarContent = styled.View`
    flex-direction: row;
    margin-right: 15px;
`;

export const NumberStars = styled.Text`
    margin-left: 5px;
`;

export const ForksContent = styled.View`
    flex-direction: row;
`;

export const NumberForks = styled.Text`
    margin-left: 5px;
`;

export const StarsContainer = styled.View`
    margin-bottom: 30px;
`;

export const Starred = styled.View`
    background: #F5F5F5;
    border-radius: 4px;
    padding: 10px 15px;
    margin-bottom: 20px;
    flex-direction: row;
    align-items: center;
`;

export const OwnerAvatar = styled.Image`
    height: 42px;
    width: 42px;
    border-radius: 21px;
    background: #EEE;
`;

export const InfoStar = styled.View`
    margin-left: 10px;
    flex: 1;
`;

export const TitleStar = styled.Text`
    font-family: 'Product Sans Bold';
    font-size: 15px;
    color: #333333;
`;

export const AuthorStar = styled.Text`
    font-family: 'Product Sans Regular';
    font-size: 13px;
    color: #666666;
    margin-top: 2px;
`;

export const MessageNoItems = styled.Text``;