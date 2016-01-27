/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  View,
  ListView
} from 'react-native';

const MOCKED_PLASTIC_DATA = [
  {name:"Coffee Mug", cost:0.1, image:{thumbnail:"https://cdn1.iconfinder.com/data/icons/food-drink-7/100/FD_align-08-512.png"}},
  {name:"Coffee Mug", cost:0.1, image:{thumbnail:"https://cdn1.iconfinder.com/data/icons/food-drink-7/100/FD_align-08-512.png"}},
  {name:"Coffee Mug", cost:0.1, image:{thumbnail:"https://cdn1.iconfinder.com/data/icons/food-drink-7/100/FD_align-08-512.png"}}
]

class RubbishList extends Component{
  render(){
    return(
      <ListView
        dataSource={MOCKED_PLASTIC_DATA}
        renderRow={this.RubbishItem}
        />
    )
  }
}

class RubbishItem extends Component{
  render(){
    return(
      <View>
        <Text>{this.props.name}</Text>
      </View>
    )
  }
}

// class PlasticPledge extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//           <Text>Welcome to PJ Pledge</Text>
//         <Text>{movie.name}</Text>
//         <Text>${movie.cost}</Text>
//         <Image source={{uri:movie.image.thumbnail}}/>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('PlasticPledge', () => RubbishList);
