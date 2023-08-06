import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
const Header = () => {
  return (
    <View>
      <LinearGradient
        style={{
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#88dae0', '#98e1d5', '#5ee4d4']}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#a1bcc0',
            borderRadius: 8,
            backgroundColor: '#fff',
            width: '90%',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            elevation: 5,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity>
              <Ionicons name="search" size={22} color="#1f1f1f" />
            </TouchableOpacity>
            <TextInput
              style={{padding: 8}}
              placeholder="Search Amazon.in"
              placeholderTextColor={'#848484'}
            />
          </View>
          <TouchableOpacity>
            <AntDesign name="scan1" size={22} color="#909594" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Feather name="mic" size={20} color="#000000" />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default Header;
