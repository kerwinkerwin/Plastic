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
  {name:"PLastic bag", cost:0.1, image:{thumbnail:"https://cdn1.iconfinder.com/data/icons/food-drink-7/100/FD_align-08-512.png"}},
  {name:"Coke cup", cost:0.1, image:{thumbnail:"https://cdn1.iconfinder.com/data/icons/food-drink-7/100/FD_align-08-512.png"}}
]

class RubbishList extends Component{
  render(){
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    var dataSource1= ds.cloneWithRows(MOCKED_PLASTIC_DATA)
    return(
      <ListView
        dataSource={dataSource1}
        renderRow={(rowData) => <RubbishItem>{rowData}</RubbishItem>}
        />
    )
  }
}

class RubbishItem extends Component{
  render(){
    return(
      <View>
        <Text>{this.props.name}</Text>
        <Text>{this.props.cost}</Text>
      </View>
    )
  }
}

class PlasticPledge extends Component {
  render() {
    return (
      <RubbishList>{MOCKED_PLASTIC_DATA}</RubbishList>
    );
  }
}

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

AppRegistry.registerComponent('PlasticPledge', () => PlasticPledge);
