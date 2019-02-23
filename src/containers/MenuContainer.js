import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart_action';
import MenuComponent from '../components/MenuComponent';
import uniqBy from 'lodash/uniqBy'


const mapStateToProps = ({ cart_reducer }) => ({
    totalPrice: cart_reducer.cart_reducer_items.reduce((total, music) => total + music.price, 0),
    count: cart_reducer.cart_reducer_items.length,
    items: uniqBy(cart_reducer.cart_reducer_items, 'id')
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch)
  });
  

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);