import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


 class RandomNumber extends Component {
     static propTypes = {
         number: PropTypes.number.isRequired,
         id: PropTypes.number.isRequired,
         isSelected: PropTypes.bool.isRequired,
         onPress: PropTypes.func.isRequired,
     };
     handlePress = () =>{
         if(this.props.isSelected){
             return;
         }
        //  console.log(this.props.number);
        this.props.onPress(this.props.id);
     }
    render() {
        return (
            <TouchableOpacity onPress={this.handlePress}>
                <Text style={[styles.random, this.props.isSelected && styles.disabled]}>{this.props.number}</Text>               
            </TouchableOpacity> 
        )
    }
}

const styles = StyleSheet.create({
    random: {
        backgroundColor: '#999',
        width: 100,
        marginHorizontal: 15,
        marginVertical: 25,
        fontSize: 35,
        textAlign: 'center',
    },
    disabled: {
        opacity: 0.5,
    }
});
export default RandomNumber;