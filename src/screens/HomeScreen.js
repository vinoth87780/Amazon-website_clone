import {View, Text, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Subheader from '../components/Subheader';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import Serives from '../components/Serives';
import Deals from '../components/Deals';

const HomeScreen = () => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <StatusBar backgroundColor={'#5ee4d4'} barStyle={'dark-content'} />
      <Header />
      <Subheader />
      <Categories />
      <Carousel />
      <Serives />
      <Deals />
    </ScrollView>
  );
};

export default HomeScreen;
