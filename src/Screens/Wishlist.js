
































import { FlatGrid } from 'react-native-super-grid';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {} from 'shortid'
import {arr} from '../Components/AdCarditem'
const Wishlist = (props) => {
  const {title, imageUri, price, location} = props;
  const [isLiked, setIsLiked] = useState(true);
  const [currData,setCurrData]=useState(arr);
  console.log(currData)
  const onLikePress = (id) => {
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
    const newList=currData.filter((list)=>list.id!==id)
    console.log(newList)
    setCurrData(newList);
};


    return (
        <View style={{flex:1}}>
        {/* <FlatGrid
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        data={data}
        spacing={10}
        renderItem={({item})=><WishlistCardItem imageUri={item.imageUri} title={item.title} price={item.price} location={item.location}/>}/> */}
        {currData.map((item,index)=>(
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
                color={isLiked ? 'red' : 'black'}
                size={22}
                onPress={()=>onLikePress(item.id)}
              />
            </View>
            <View style={{padding: 7}}>
              <Image
                source={{uri: item.imageUri}}
                style={{width: 90, height: 100, alignSelf: 'center'}}
              />
              <Text style={{color: '#142e2c', fontWeight: 'bold', fontSize: 17}}>
                Rs {item.price}
              </Text>
              <Text
                style={{textTransform: 'uppercase', marginTop: 3, color: '#142e2c'}}
                numberOfLines={1}>
                {item.title}
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
                {item.location}
              </Text>
            </View>
          </Card>
        ))}
        </View>
    )
}

export default Wishlist


