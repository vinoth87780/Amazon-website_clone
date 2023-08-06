import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';

import {HeaderData} from '../Data/HeaderData';
import {useNavigation} from '@react-navigation/native';
const Categories = () => {
  const navigation = useNavigation();
  return (
    <View style={{marginHorizontal: 10}}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{padding: 10, backgroundColor: '#fff'}}>
        {HeaderData.map(item => (
          <View key={item.id} style={{}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Product')}
              style={{
                alignItems: 'center',
                marginHorizontal: 8,
              }}>
              <Image style={{width: 50, height: 50}} source={item.image} />
              <Text style={{fontSize: 10, color: '#2c4341'}}>{item.title}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
