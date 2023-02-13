import React, {useState, useEffect, useRef} from 'react';
import {View, Image, StyleSheet, ScrollView, Dimensions} from 'react-native';
import axios from 'axios';

const windowWidth = Dimensions.get('window').width / 2;
const styles = StyleSheet.create({
  tinyLogo: {
    width: windowWidth,
    height: windowWidth,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: 'black',
  },
  item: {
    width: '47%',
    margin: 3,
  },
});

export default () => {
  const intervalId = useRef<number>();
  const [arrayImage, setArrayImage] = useState<string[]>([]);

  const url = 'https://dog.ceo/api/breeds/image/random';

  const count = useRef(0);
  const stop = count.current > 7;
  useEffect(() => {
    console.log('runnnnnnnnnnn useEffect');
    if (stop) {
      if (intervalId.current) {
        console.log('clear intervalllllllllllll');
        clearInterval(intervalId.current);
      }
      return;
    }
    console.log('create intervalllllllllllll');
    intervalId.current = setInterval(() => {
      axios
        .get(url)
        .then(json => {
          // console.log({json});
          count.current = count.current + 1;
          // console.log(count.current);
          setArrayImage(currentState => {
            return [...currentState, json.data.message];
          });
          // setArrayImage([...arrayImage, json.message]);
        })
        .catch(error => console.log(error));
    }, 1000);
    console.log('count.current' + count.current);
  }, [stop]);

  console.log(arrayImage);
  return (
    <ScrollView>
      <View style={styles.container}>
        {arrayImage.map(image => {
          return (
            <View style={styles.item} key={image}>
              <Image
                key={image}
                style={styles.tinyLogo}
                source={{
                  uri: image,
                }}
              />
            </View>
          );
        })}
        <View />
        {/* {listItems} */}
      </View>
    </ScrollView>
  );
};
