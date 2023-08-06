import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import image1 from '../assets/money.jpg';
import image2 from '../assets/scan1.png';
import image3 from '../assets/Visa.jpg';
import image4 from '../assets/12.jpg';
import image5 from '../assets/12.png';
import React from 'react';
import {create} from 'react-test-renderer';
import {RecentSearchData} from '../Data/RecentSearchData';

const Serives = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingRight: 20}}
      style={{marginTop: -20, marginHorizontal: 10}}>
      <View style={{backgroundColor: '#fff', borderRadius: 10}}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View style={styles.innerContainer}>
            <Image
              style={{height: 50, width: 50, borderRadius: 50}}
              source={{
                uri: 'data:image/png;base64,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',
              }}
            />
            <Text style={styles.title}>Amazon Pay</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image
              style={{height: 50, width: 50, borderRadius: 50}}
              source={image1}
            />
            <Text style={styles.title}>Send Money</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <View style={styles.innerContainer}>
            <Image
              style={{height: 50, width: 50, borderRadius: 50}}
              source={image2}
            />
            <Text style={styles.title}>Scan QR</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image
              style={{height: 50, width: 50, borderRadius: 50}}
              source={image3}
            />
            <Text style={styles.title}>Pay Bills</Text>
          </View>
        </View>
      </View>
      {RecentSearchData.map(item => (
        <View
          key={item.id}
          style={{
            backgroundColor: 'white',
            marginLeft: 8,
            borderRadius: 5,
            elevation: 5,
            padding: 5,
            width: 140,
          }}>
          <Text style={{fontSize: 14, color: 'black', marginBottom: 8}}>
            {item.title}
          </Text>
          <Image source={item.image} style={{width: '100%', height: 130}} />
        </View>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  innerContainer: {
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 12,
    color: 'black',
  },
});
export default Serives;
