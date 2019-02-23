import { connect } from 'react-redux';
import MusicCardComponent from '../components/MusicCardComponent';
import * as cartAtions from '../actions/cart_action'
import { bindActionCreators } from 'redux';


const mapStateToProps = ({ cart_reducer }, {id}) => ({
    addedCount: cart_reducer.cart_reducer_items.reduce((count, mus) => count + (mus.id === id ? 1 : 0), 0), 
    ind: Date.now()
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartAtions, dispatch)
})



export default connect(mapStateToProps, mapDispatchToProps)(MusicCardComponent);