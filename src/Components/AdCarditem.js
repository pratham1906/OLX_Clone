import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const arr = [];
const AdCarditem = props => {
  const {title, imageUri, price, location,id} = props;
  const [isLiked, setIsLiked] = useState(false);


  const onLikePress = () => {
    if (isLiked == false) {
      arr.push({
        id:id,
        title: title,
        imageUri: imageUri,
        price: price,
        location: location,
      });
     
    } else {
      console.log('Removal');
      // arr.push({
      //   title: title,
      //   imagUri: imageUri,
      //   price: price,
      //   location: location,
      // });
      const itemToBeRemoved = {
        id:id,
        title: title,
        imageUri: imageUri,
        price: price,
        location: location,
      };
      const findIndex = arr.findIndex(a => a.title === itemToBeRemoved.title);
      findIndex !== -1 && arr.splice(findIndex, 1);
      console.log(arr);
    }
    setIsLiked(!isLiked);
  };

  return (
    <Card
      style={{
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        borderWidth: 2,
        borderColor: '#d9dddc',
      }}>
      <View style={{position: 'relative', top: 36, left: '80%'}}>
        <FontAwesome
          name="heart"
          color={isLiked?"red":"black"}
          size={22}
          onPress={onLikePress}
        />
      </View>
      <View style={{padding: 7}}>
        <Image
          source={{uri: imageUri}}
          style={{width: 90, height: 100, alignSelf: 'center'}}
        />
        <Text style={{color: '#142e2c', fontWeight: 'bold', fontSize: 17}}>
          Rs {price}
        </Text>
        <Text
          style={{textTransform: 'uppercase', marginTop: 3, color: '#142e2c'}}
          numberOfLines={1}>
          {title}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 16,
          marginLeft: 0,
          padding: 6,
          position: 'relative',
          bottom: 0,
        }}>
        <Entypo name="location-pin" size={18} />
        <Text
          style={{
            textTransform: 'uppercase',
            color: 'darkgray',
            textAlign: 'left',
            fontSize: 12,
          }}
          numberOfLines={1}>
          {location}
        </Text>
      </View>
    </Card>
  );
};

export { AdCarditem,arr};

const styles = StyleSheet.create({});
