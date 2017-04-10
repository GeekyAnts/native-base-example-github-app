import React, { Component } from 'react';
import { Container, Content, Header, Left, Right, Body, Title, Text, Button, Card, CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

 class Welcome extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left />
                    <Body>
                        <Title>Welcome</Title>
                    </Body>
                    <Right />
                </Header>
                <Content contentContainerStyle= {{justifyContent: 'center', alignItems: 'center', paddingTop: 40, paddingHorizontal: 10}}>
                <Card>
                        <CardItem>
                            <Text>
                                Welcome to Candy Land Folks ;)
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Text>
                                Press Button to fetch Github Repos
                            </Text>
                        </CardItem>
                    </Card>
                <Button dark block onPress= {() =>{ Actions.RepoList();}} style= {{marginTop: 40}}>
                      <Text> Fetch Github Repos </Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default Welcome;
