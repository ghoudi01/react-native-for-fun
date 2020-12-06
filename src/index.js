import React from 'react';
import {View, Text, Dimensions, Animated} from 'react-native';
import styles from './styles';
import {
  PanGestureHandler,
  FlingGestureHandler,
  Directions,
  State,
} from 'react-native-gesture-handler';
import {Rating, AirbnbRating} from 'react-native-ratings';
import Entypo from 'react-native-vector-icons/Entypo';
const windowWidth = Dimensions.get('window').width;

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moved: false,
      ratting: 3,
    };

    this._translateImage = new Animated.Value(0);
    this._translateConatiner = new Animated.Value(0);
  }

  render() {
    return (
      <FlingGestureHandler
        direction={Directions.UP | Directions.DOWN}
        onHandlerStateChange={({nativeEvent}) => {
          if (nativeEvent.state == State.END) {
            Animated.parallel([
              Animated.spring(this._translateImage, {
                toValue: !this.state.moved ? -110 : 0,
                useNativeDriver: true,
              }),
              Animated.spring(this._translateConatiner, {
                toValue: !this.state.moved ? +40 : 0,
                useNativeDriver: true,
              }),
            ]).start();

            this.setState({moved: !this.state.moved});
          }
        }}>
        <View style={styles.container}>
          <Animated.View
            style={[
              styles.scrollViewContainer,
              {
                transform: [
                  {
                    translateY: this._translateConatiner,
                  },
                ],
              },
            ]}>
            <View style={styles.textConatiner}>
              <Text style={styles.title}>Maldives</Text>
              <View style={{flexDirection: 'row', marginLeft: -5}}>
                <Entypo name="location-pin" color="red" size={20} />
                <Text style={styles.subTitle}>South asia</Text>
              </View>
            </View>
            <View style={{position: 'absolute', bottom: 15}}>
              <Rating
                onFinishRating={(ra) => this.setState({ratting: ra})}
                style={{paddingVertical: 10}}
              />
            </View>

            <Animated.Image
              style={[
                styles.image,
                {
                  transform: [{translateY: this._translateImage}],
                },
              ]}
              source={require('./assets/exemple.jpg')}
            />
          </Animated.View>
        </View>
      </FlingGestureHandler>
    );
  }
}

export default Demo;
