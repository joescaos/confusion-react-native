import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

function RenderDish(props){

    const styles = StyleSheet.create({
        image: {
          width: 100,
          height: 100,
        },
      });

    const dish = props.dish;

    if (dish != null){
        return(
            <Card
                featuredTitle={dish.name}
            >
                <Image source={require('./images/Imagen1.jpg')} style={styles.image}/>
                <Text style={{margin: 10}}>
                    {dish.description}
                </Text>

            </Card>
        );
    }
    else {
        return(
            <View></View>
        );
    }
}

function Dishdetail(props){
    return(<RenderDish dish={props.dish} />)
}

export default Dishdetail;