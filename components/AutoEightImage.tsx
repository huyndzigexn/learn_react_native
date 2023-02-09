// export default function App() {
//   // const [currentImage, setCurrentImage] = useState('');

//   // useEffect(() => {
//   //   // setInterval(() => {
//   //   setCurrentImage('https://dog.ceo/api/breeds/image/random');
//   //   // }, 5000);
//   // }, []);

//   return (
//     <View>
//       <img src="https://www.w3schools.com/html/pic_trulli.jpg" />
//       <Image
//         // style={styles.logo}
//         source={{
//           uri: 'https://www.w3schools.com/html/pic_trulli.jpg',
//         }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#202020',
//     justifyContent: 'flex-end',
//   },
//   fontNumber: {
//     fontSize: 60,
//     color: '#fff',
//     textAlign: 'right',
//   },
//   row: {
//     flexDirection: 'row',
//   },
//   btnText: {
//     color: '#f2f0e9',
//     fontSize: 40,
//     fontWeight: '300',
//   },

//   btn: {
//     backgroundColor: '#b5b5b5',
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 100,
//     borderColor: 'black',
//     borderStyle: 'solid',
//     borderWidth: 0.2,
//     borderBottomWidth: 0,
//   },
//   btnZero: {
//     flex: 0,
//     width: '50%',
//   },
//   btnOrange: {
//     backgroundColor: '#fc9d17',
//   },
//   btnGray: {
//     backgroundColor: 'gray',
//   },
// });
import React, {useState, useEffect, useRef} from 'react';
import {View, Image, StyleSheet, ScrollView, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width / 2;
const windowHeight = Dimensions.get('window').height / 2;
const styles = StyleSheet.create({
  // container: {
  //   flexDirection: 'row',
  //   paddingTop: 50,
  // },
  tinyLogo: {
    width: windowWidth,
    height: windowHeight,
  },
  logo: {
    width: 66,
    height: 58,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  item: {
    width: '50%',
  },
});

export default DisplayAnImage = () => {
  const [currentImage, setCurrentImage] = useState('');
  const [loading, setLoading] = useState(true);
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
    }, 100);

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
