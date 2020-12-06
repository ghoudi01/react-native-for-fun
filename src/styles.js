import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#cce7e8',
    alignItems: 'center',
  },
  scrollViewContainer: {
    height: 470,
    borderRadius: 10,
    width: width - 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },
  textConatiner: {
    position: 'absolute',
    top: 15,
    left: 15,
  },
  image: {
    width: width - 110,
    height: 400,
    position: 'absolute',
    bottom: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  subTitle: {},
});
export default styles;
