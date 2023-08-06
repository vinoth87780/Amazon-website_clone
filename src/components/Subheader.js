import {View, Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
const Subheader = () => {
  return (
    <View>
      <LinearGradient
        style={{padding: 12, flexDirection: 'row', alignItems: 'center'}}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#bbe8ef', '#bdeee9', '#adeee1']}>
        <Feather name="map-pin" size={16} color={'#2c4341'} />
        <Text style={{fontSize: 13, color: '#2c4341', marginHorizontal: 8}}>
          Deliver to Villupuram - Tamilnadu 604304
        </Text>
        <Entypo name="chevron-thin-down" size={10} color={'#000000'} />
      </LinearGradient>
    </View>
  );
};

export default Subheader;
