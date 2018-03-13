// Container
import { connect } from 'react-redux';
import Counter from '../components';
import { onIncrement, onDecrement } from '../actions';

const mapStateToProps = state => ({
  value: state.countReducer,
});
const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(onIncrement()),
  onDecrement: () => dispatch(onDecrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
