import React, { Component }  from 'react';
import { Text, View, Image, ScrollView, StyleSheet, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';
import { connect } from 'react-redux';

import { Loading } from './LoadingComponent';

const mapStateToProps = state => {
    return{
        leaders: state.leaders
    }
}

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
                    key={index}
                    chevron={false}
                >
                    <Image style={styles.tinyLogo} source={{ uri: baseUrl + item.image }}/>
                    <ListItem.Content>
                        <ListItem.Title>{item.name}</ListItem.Title>
                        <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                    </ListItem.Content>
            </ListItem>
            )
        };

        if (this.props.leaders.isLoading){
            return(
                <ScrollView>
                    <History />
                    <Card title='Corporate Leadership'>
                        <Loading />
                    </Card>
                </ScrollView>
            );
        }
        else if (this.props.leaders.errMess){
            return(
                <ScrollView>
                    <History />
                    <Card title='Corporate Leadership'>
                        <Text>{this.props.leaders.errMess}</Text>
                    </Card>
                </ScrollView>
            );
        }

        else {
            return(
                <ScrollView>
                    <History />
                    <Card title='Corporate Leadership'>
                        <FlatList
                            data={this.props.leaders.leaders}
                            renderItem={RenderLeader}
                            keyExtractor={item => item.id.toString()}
                        />
                    </Card>
                </ScrollView>
                
            );
        }
        
    };
}

export default connect(mapStateToProps)(About);