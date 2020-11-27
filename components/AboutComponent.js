import React, { Component }  from 'react';
import { Text, View, Image, ScrollView, StyleSheet, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { LEADERS } from '../shared/leaders';

function History(){
    return(
        <Card>
        <Card.Title>Our History</Card.Title>
        <Card.Divider />
            <Text>Started in 2010, Ristorante con Fusion quickly established itself as a culinary 
                icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that 
                can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  
                Featuring four of the best three-star Michelin chefs in the world, you never know what will 
                arrive on your plate the next time you visit us.
            </Text>
            <Text> </Text>

            <Text>
                The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO,
                Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.
            </Text>
        </Card>
    )
   
}

class About extends Component{

    constructor(props){
        super(props);
        this.state = {
            leaders: LEADERS,
        }

    }

    static navigationOptions = {
        title: 'About us'
    }

    render(){

        const styles = StyleSheet.create({
            tinyLogo: {
              width: 50,
              height: 50,
              borderRadius: 40,
            },
          });

        const RenderLeader = ({item, index}) => {
            
            return(
                <ListItem
                    key={item.id}
                    chevron={false}
                >
                    <Image style={styles.tinyLogo} source={require('./images/Imagen1.jpg')}/>
                    <ListItem.Content>
                        <ListItem.Title>{item.name}</ListItem.Title>
                        <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                    </ListItem.Content>
            </ListItem>
            )
        }
        return(
            <ScrollView>
                <History />
                <Card title='Corporate Leadership'>
                    <FlatList
                        data={this.state.leaders}
                        renderItem={RenderLeader}
                        keyExtractor={leader => leader.id.toString()}
                    />
                </Card>
            </ScrollView>
            
        );
    };
}

export default About;