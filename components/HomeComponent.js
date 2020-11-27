import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { DISHES} from '../shared/dishes';
import { LEADERS} from '../shared/leaders';
import { PROMOTIONS} from '../shared/promotions';
import { baseUrl } from '../shared/baseUrl';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return{
        dishes: state.dishes,
        promotions: state.promotions,
        leaders: state.leaders,
    }
}

function RenderItem(props){
    const item = props.item;

    if (item != null){
        return(
            <Card
                featuredTitle={item.name}
            >
                <Card.Title>{item.name}</Card.Title>
                <Image  style={{width: 300, height: 300}} source={{ uri: baseUrl + item. image }}/>
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>

            </Card>
        );
    }
    else {
        return(
            <View></View>
        );
    };
};

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    };

    render() {
        return(
            <ScrollView>
                <RenderItem item={this.props.dishes.dishes.filter((dish) => dish.featured)[0]} />
                <RenderItem item={this.props.promotions.promotions.filter((promo) => promo.featured)[0]} />
                <RenderItem item={this.props.leaders.leaders.filter((leader) => leader.featured)[0]} />
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(Home);