import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as filterActions from '../actions/filter_action';
import FilterComponent from '../components/FilterComponent';


const mapStateToProps = ({ filter_reducer }) => ({
    filterBy: filter_reducer.filterBy,
    filter_reducer: filter_reducer.filter_reducer_items
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(filterActions, dispatch)
  });
  

export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent);