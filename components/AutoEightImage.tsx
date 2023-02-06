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
import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default DisplayAnImage = () => {
  const [currentImage, setCurrentImage] = useState('');
  const [loading, setLoading] = useState(true);

  const url = 'https://dog.ceo/api/breeds/image/random';

  const count = useRef(0);
  useEffect(() => {
    let interval = setInterval(() => {
      if (count.current < 3) {
        fetch(url)
          .then(response => response.json())
          .then(json => {
            console.log({json});
            count.current = count.current + 1;
            console.log(count.current);
          })
          .catch(error => console.log(error))
          .finally(() => setLoading(false));
      } else {
        myStop();
      }
    }, 2000);
    let myStop = () => {
      clearInterval(interval);
    };
    console.log('count.current' + count.current);
  }, [count]);
  return (
    <View style={styles.container}>
      {/* <Image
        style={styles.logo}
        source={{
          // uri: 'https://www.w3schools.com/html/pic_trulli.jpg',
          uri: {currentImage},
        }}
      /> */}
    </View>
  );
};
