import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import recommentProduct from '../assets/ProductRecommented/1.jpg';
const Deals = () => {
  return (
    <View
      style={{
        marginTop: 20,
        //paddingHorizontal: 10
      }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: 'black',
          paddingHorizontal: 10,
        }}>
        Recommended deals for you
      </Text>
      <Image
        style={{height: 250, width: '100%', marginVertical: 10}}
        source={recommentProduct}
      />

      <View style={{paddingHorizontal: 10}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#be0201',
              width: 60,
              alignItems: 'center',
              padding: 5,
              borderRadius: 5,
            }}>
            <Text style={{color: '#fff', fontSize: 12}}>18% off</Text>
          </TouchableOpacity>
          <Text style={{color: '#be0201', fontWeight: 'bold', marginLeft: 8}}>
            Deals
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: '#000', fontSize: 16, marginVertical: 5}}>
            ₹ 243245.65
          </Text>
          <Text style={{fontSize: 10, marginHorizontal: 5}}>M.R.P</Text>
          <Text style={{fontSize: 10, textDecorationLine: 'line-through'}}>
            ₹ 283245.65
          </Text>
        </View>
        <Text style={{color: '#000', fontSize: 14}}>
          New Color kits for girls makeup
        </Text>
        <Text style={{color: '#017185', fontSize: 14, marginVertical: 10}}>
          See all deals
        </Text>
      </View>
    </View>
  );
};

export default Deals;
