import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Home = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.topContainer}>
        <View style={styles.locationContainer}>
          <Entypo name="location-pin" size={24} color="#012d32" />
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#0d3133'}}>
            Ajmer,Rajasthan
          </Text>
          <View style={{marginTop: 6, marginLeft: 2}}>
            <AntDesign name="down" size={18} />
          </View>
        </View>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={styles.searchContainer}>
            <View style={{marginLeft: 10}}>
              <AntDesign name="search1" size={21} color="#012d32" />
            </View>
            <Text
              style={{paddingLeft: 6, fontSize: 18, color: 'darkgray'}}
              numberOfLines={1}>
              Find Cars,Mobile Phones and more
            </Text>
          </View>
          <View style={{marginTop: 22, marginLeft: 12}}>
            <AntDesign name="bells" size={24} color="#012d32" />
          </View>
        </View>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          marginTop: 15,
          borderColor: 'darkgray',
        }}></View>
      <View style={styles.categoriesContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 30,
          }}>
          <Text
            style={{
              color: '#142e2c',
              fontWeight: '700',
              marginLeft: 12,
              fontSize: 17,
            }}>
            Browse Categories
          </Text>
          <Text
            style={{
              color: '#142e2c',
              fontWeight: '700',
              marginRight: 12,
              fontSize: 17,
            }}>
            See all
          </Text>
        </View>
        <ScrollView horizontal>
          <View
            style={{
              alignItems: 'center',
              marginLeft: 12,
              marginTop: 12,
              width: 110,
            }}>
            <Entypo name="location-pin" size={50} />
            <Text style={{alignSelf: 'center', marginTop: 12, fontSize: 12}}>
              OLX AUTOS(CARS)
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              marginLeft: 12,
              marginTop: 12,
              width: 110,
            }}>
            <Entypo name="location-pin" size={50} />
            <Text style={{alignSelf: 'center', marginTop: 12, fontSize: 12}}>
              PROPERTIES
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              marginLeft: 12,
              marginTop: 12,
              width: 110,
            }}>
            <Entypo name="location-pin" size={50} />
            <Text style={{alignSelf: 'center', marginTop: 12, fontSize: 12}}>
              MOBILES
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              marginLeft: 12,
              marginTop: 12,
              width: 110,
            }}>
            <Entypo name="location-pin" size={50} />
            <Text style={{alignSelf: 'center', marginTop: 12, fontSize: 12}}>
              BOOKS
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              marginLeft: 12,
              marginTop: 12,
              width: 110,
            }}>
            <Entypo name="location-pin" size={50} />
            <Text style={{alignSelf: 'center', marginTop: 12, fontSize: 12}}>
              ELECTRONICS
            </Text>
          </View>
        </ScrollView>
      </View>
      
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  topContainer: {
    marginTop: 20,
    margin: 12,
    backgroundColor: '#f8faf9',
  },
  locationContainer: {
    flexDirection: 'row',
  },
  searchContainer: {
    flexDirection: 'row',
    marginTop: 12,
    borderWidth: 1.5,
    borderColor: '#012d32',
    height: 44,
    width: '85%',
    alignItems: 'center',
    borderRadius: 5,
  },
});
