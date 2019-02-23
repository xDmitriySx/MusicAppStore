import { connect } from 'react-redux';
import * as musicActions from '../actions/music_action'
import { bindActionCreators } from 'redux';
import MainMusicStoreComponent from '../components/MainMusicStoreComponent';
import orderBy from 'lodash/orderBy';



const sortBy = (music_reducer, filterBy) => {
   switch (filterBy) {
       case 'price_high': 
           return orderBy(music_reducer, 'price', 'desc');
       case 'price_low': 
           return orderBy(music_reducer, 'price', 'asc');
       case 'composer': 
           return orderBy(music_reducer, 'composer', 'asc');
       default :
       return music_reducer;
   }
};

const filterMus = (music_reducer, searchQuery) => 
   music_reducer.filter(
           o => o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
           o.composer.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
           );

const searchingMus = (music_reducer, filterBy, searchQuery) => {
   return sortBy(filterMus(music_reducer, searchQuery), filterBy);
}

const mapStateToProps = ({music_reducer, filter_reducer, cart_reducer}) => ({
   music_reducer: music_reducer.music_reducer_items && searchingMus(music_reducer.music_reducer_items, filter_reducer.filterBy, filter_reducer.searchQuery),
   isReady: music_reducer.isReadyMusic,
   cart_reducer: cart_reducer.cart_reducer_items,
   filter_reducer: filter_reducer.filterBy
});

  
  const mapDispatchToProps = dispatch => ({
     ...bindActionCreators(musicActions, dispatch)
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(MainMusicStoreComponent);
  