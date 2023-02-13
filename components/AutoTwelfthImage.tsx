import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  Text,
} from 'react-native';
const windowWidth = Dimensions.get('window').width / 3;
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
  },
  item: {
    width: '33%',
  },
  fontNumber: {
    color: 'green',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default DisplayAnImage = () => {
  const intervalId = useRef<number>();
  const [arrayImage, setArrayImage] = useState<string[]>([]);
  const [seconds, setSeconds] = useState(10);
  const [shouldShow, setShouldShow] = useState(true);
  const url = 'https://dog.ceo/api/breeds/image/random';

  let count = useRef(0);
  const stop = count.current > 3;
  useEffect(() => {
    if (stop) {
      if (intervalId.current) {
        setShouldShow(false);
        clearInterval(intervalId.current);
      }
      return;
    }
    const getDog = async () => {
      let response = await fetch(url);
      let data = await response.json();
      return data.message;
    };
    const threeDogs = () => {
      return Promise.all([getDog(), getDog(), getDog()]);
    };
    intervalId.current = setInterval(() => {
      setSeconds(seconds => {
        console.log(count.current);
        if (seconds === 0) {
          threeDogs().then(json => {
            setArrayImage(currentState => {
              count.current += 1;
              return [...currentState, ...json];
            });
          });
          return count.current === 3 ? 'end' : 10;
        }
        return seconds - 1;
      });
    }, 1000);
  }, [stop]);
  return (
    <ScrollView>
      <View>
        {shouldShow ? (
          <Text style={styles.fontNumber}>CountDown: {seconds}</Text>
        ) : null}
      </View>
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
      </View>
    </ScrollView>
  );
};
