import React, {useState, useEffect, useRef} from 'react';
import {View, Image, StyleSheet, ScrollView, Dimensions} from 'react-native';
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

export default DisplayAnImage = () => {
  const intervalId = useRef<number>();
  const [arrayImage, setArrayImage] = useState<string[]>([]);

  const url = 'https://dog.ceo/api/breeds/image/random';

  const count = useRef(0);
  const xx = count.current > 7;
  useEffect(() => {
    console.log('runnnnnnnnnnn useEffect');
    if (xx) {
      if (intervalId.current) {
        console.log('clear intervalllllllllllll');
        clearInterval(intervalId.current);
      }
      return;
    }
    console.log('create intervalllllllllllll');
    intervalId.current = setInterval(() => {
      fetch(url)
        .then(response => response.json())
        .then(json => {
          // console.log({json});
          count.current = count.current + 1;
          // console.log(count.current);
          setArrayImage(currentState => {
            return [...currentState, json.message];
          });
          // setArrayImage([...arrayImage, json.message]);
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }, 10000);
    console.log('count.current' + count.current);
  }, [xx]);

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
