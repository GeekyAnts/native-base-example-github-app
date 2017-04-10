import React, { Component } from 'react';
import { Container, Content, Header, Left, Right, Body, Title, Text, Button, Spinner, List, ListItem, Icon } from 'native-base';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Actions } from 'react-native-router-flux';
import {getRepos, getRepoThunk, repoSelected} from '../actions/index';

class RepoList extends Component{
  componentWillMount(){
    this.props.getRepoThunk();
  }
  render(){
    if(this.props.repos.length === 0){
    return(
      <Container>
          <Header>
          <Left>
          <Button transparent onPress= {()=>Actions.pop()}>
                        <Icon name='arrow-back' />
                    </Button>
          </Left>
              <Body>
                  <Title>Repo List</Title>
              </Body>
              <Right />
          </Header>
          <Content contentContainerStyle= {{justifyContent: 'center', alignItems: 'center', paddingTop: 40, paddingHorizontal: 10}}>
          <Text style= {{fontSize: 30, fontWeight: 'bold', marginTop: 30, marginBottom: 30}}>Loading your repo List, Please wait</Text>
          <Spinner />
          </Content>
          </Container>
    );
  }
  else if(this.props.repos.length !== 0){
    return(
    <Container>
    <Header>
    <Left>
    <Button transparent onPress= {()=>Actions.pop()}>
                  <Icon name='arrow-back' />
              </Button>
    </Left>
        <Body>
            <Title>GitHub Repo List</Title>
        </Body>
        <Right />
    </Header>
    <Content>
        <List dataArray={this.props.repos}
            renderRow={(item) =>
                <ListItem onPress={() => { Actions.RepoInfo();
                  this.props.repoSelected(item)}}>
                    <Text>{item.full_name}</Text>
                </ListItem>
                      }>
          </List>
    </Content>
    </Container>
  );
  }
  }
}

function mapStateToProps(state){
  return{
    repos : state.repos
  };
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({getRepos: getRepos, getRepoThunk: getRepoThunk, repoSelected: repoSelected}, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(RepoList);
