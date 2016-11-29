//Libraries
import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import _ from 'lodash';
//Custom
import { locationsFetch } from '../../actions/LocationActionCreators';
import LocationItem from './LocationItem';

class LocationsList extends Component {
     
    componentWillMount() { this.props.locationsFetch(); this.createDataSource(this.props);}

    componentWillReceiveProps(nextProps) { this.createDataSource(nextProps);}

    createDataSource({ locations }) {
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });

      this.dataSource = ds.cloneWithRows(locations);
    }

    renderRow(location) { return <LocationItem item={location} /> }

    render() {
      const { card, locationsContainer} = styles;
      return (
        <View style={locationsContainer}>
            <View style={card}>
              <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
               />
            </View>
        </View>
      );
    }
};

const styles = {
  locationsContainer: {
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'relative',
    flex: 1,
  },
  card: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginTop: 3,
    justifyContent: 'center',
    flex:20
  }
};


const mapStateToProps = state => {
    
    const locations = _.map(state.location.locations, (val, uid) => {
        return { ...val, uid };
    });

    return { locations };
};


export default connect (mapStateToProps, { locationsFetch })(LocationsList);