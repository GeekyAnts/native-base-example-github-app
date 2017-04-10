import React, { Component } from 'react';
import { Container, Content, Header, Left, Right, Body, Title, Text, Button, List, ListItem, Icon} from 'native-base';
import {connect} from 'react-redux';

import { Actions } from 'react-native-router-flux';

class RepoInfo extends Component{
  render(){
    return(
      <Container>
          <Header>
              <Left>
              <Button transparent onPress= {()=>Actions.pop()}>
                            <Icon name='arrow-back' />
                        </Button>
              </Left>
              <Body>
                  <Title>Repo Info</Title>
              </Body>
              <Right />
              </Header>
              <Content>
              <List>
              <ListItem><Text>{this.props.activeRepo.full_name}</Text></ListItem>
              <ListItem><Text>{this.props.activeRepo.description}</Text></ListItem>
              <ListItem><Text>{this.props.activeRepo.id}</Text></ListItem>
              <ListItem><Text>{this.props.activeRepo.owner.login}</Text></ListItem>
              <ListItem><Text>{this.props.activeRepo.url}</Text></ListItem>
              </List>
              </Content>
      </Container>
    );
  }
}
function mapStateToProps(state){
  return{
    activeRepo : state.activeRepo
  };
}
export default connect(mapStateToProps)(RepoInfo);
