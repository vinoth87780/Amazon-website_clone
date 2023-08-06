import {View, Text, Dimensions, Image} from 'react-native';
import React, {useRef, useState} from 'react';
import CarouselSlider, {Pagination} from 'react-native-snap-carousel';
import {CarouselData} from '../Data/CarouselData';
const sliderWidth = Dimensions.get('screen').width;
const Carousel = () => {
  const carouselRef = useRef();
  const [activeSlider, setActiveSlider] = useState(0);
  const renderItem = ({item, index}) => {
    return (
      <View style={{}}>
        <Image source={item.image} style={{height: 250, width: '100%'}} />
      </View>
    );
  };
  return (
    <View style={{position: 'relative'}}>
      <CarouselSlider
        ref={carouselRef}
        data={CarouselData}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={500}
        onSnapToItem={index => setActiveSlider(index)}
      />
      <Pagination
        dotsLength={CarouselData.length}
        activeDotIndex={activeSlider}
        containerStyle={{
          position: 'absolute',
          bottom: 0,
          left: '25%',
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
        }}
        inactiveDotStyle={{
          width: 15,
          height: 15,
          borderRadius: 10,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        dotColor="green"
        inactiveDotColor="#fff"
      />
    </View>
  );
};

export default Carousel;
