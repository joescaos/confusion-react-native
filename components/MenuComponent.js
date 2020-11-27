import React, {Component} from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';
import { Tile} from 'react-native-elements';

import { baseUrl } from '../shared/baseUrl';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return{
        dishes: state.dishes,
        
    }
}

class Menu extends Component {

    render(){

        const styles = StyleSheet.create({
            tinyLogo: {
              width: 50,
              height: 50,
              borderRadius: 40,
            },
          });

        const renderMenuItem = ({item, index}) => {

            return (
                <Tile
                    key={index}
                    caption={item.description}
                    featured
                    onPress={() => navigate('Dishdetail', {dishId: item.id})}
                    imageSrc={{uri: baseUrl + item.image }}
                />
            );
        };

        const { navigate } = this.props.navigation;

        return (
            <FlatList 
                data={this.props.dishes.dishes}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
            />
            
        );
    }
};
export default connect(mapStateToProps)(Menu);