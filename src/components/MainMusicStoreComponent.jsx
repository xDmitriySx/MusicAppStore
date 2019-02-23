import React, { Component } from 'react';
import MusicCardContainer from '../containers/MusicCardContainer';
import MenuContainer from '../containers/MenuContainer'
import FilterConteiner from '../containers/FilterContainer';
import ShowCartContainer from '../containers/ShowCartContainer';
import { Container } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';
import axios from 'axios'



class MainMusicStoreComponent extends Component {
  componentWillMount(){
    const { setMusic } = this.props;
    axios.get('./music.json').then(({data}) => {
      setMusic(data);
    });
  }
  render() {
    const { music_reducer, cart_reducer, filter_reducer } = this.props;
    return (
      <Container>
        <MenuContainer />
        <FilterConteiner />
        <Card.Group itemsPerRow={5}>
          {!music_reducer || filter_reducer === 'cart'  ?
           cart_reducer.map((mus, i) => <ShowCartContainer key={i} {...mus}/> ) :
           music_reducer.map((mus, i) => <MusicCardContainer key={i} {...mus} />)}
        </Card.Group>
      </Container>
    );
  } 
}



export default MainMusicStoreComponent;
