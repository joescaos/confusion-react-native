import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';



function Contact(props){
    
    return(
        <Card>
            <Card.Title>Contact Information</Card.Title>
            <Card.Divider></Card.Divider>
            <Text>121, Clear Water Bay Road</Text>
            <Text> </Text>
            <Text>Clear Water Bay, Kowloon</Text>
            <Text> </Text>
            <Text>HONG KONG</Text>
            <Text> </Text>
            <Text>Tel: +852 1234 5678</Text>
            <Text> </Text>
            <Text>Fax: +852 8765 4321</Text>
            <Text> </Text>
            <Text>Email: confusion@food.net</Text>
        </Card>
    );
}

export default Contact;