import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';

class ItemList extends Component {
  componentDidMount() {

    this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
  }
  render() {
    if (this.props.hasErrored) {
      return <p> sorry! There was an error loading the items </p>;
    }
    if (this.props.isLoading) {
      return <p>Loading...</p>;
    }
    return(
       <ul>
           {this.props.items.map((item) => (
             <li key={item.id}>
                  {item.label}
              </li>
           ))}
       </ul>
    );
  }
}

ItemList.propTypes = {
   fetchData: PropTypes.func.isRequired,
   items: PropTypes.array.isRequired,
   hasErrored: PropTypes.bool.isRequired,
   isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
   return {
       items: state.items,
       hasErrored: state.itemsHasErrored,
       isLoading: state.itemsIsLoading
   };
};

const matchDispatchToProps = (dispatch) => {
    return {
       fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, matchDispatchToProps)(ItemList);
