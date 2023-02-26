import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: 'flex-end',
  },
  fontNumber: {
    fontSize: 60,
    color: '#fff',
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
  },
  btnText: {
    color: '#f2f0e9',
    fontSize: 40,
    fontWeight: '300',
  },

  btn: {
    backgroundColor: '#b5b5b5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 0.2,
    borderBottomWidth: 0,
  },
  btnZero: {
    flex: 0,
    width: '50%',
  },
  btnOrange: {
    backgroundColor: '#fc9d17',
  },
  btnGray: {
    backgroundColor: 'gray',
  },
  button: {
    height: 44,
    marginTop: 20,
    borderRadius: 4,
    backgroundColor: 'cyan',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  textButton: {
    padding: 10,
    paddingBottom: 0,
  },
  containerx: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#a2a2a2',
  },
  imageContainer: {
    width: '80%',
    height: '50%',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#a2a2a2',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
