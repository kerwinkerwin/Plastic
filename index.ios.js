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
  ListView,
  TouchableElement,
  TouchableHighlight
} from 'react-native';

var MOCK_DATA = [{name:"Coffee Mug", cost:0.1, image:{thumbnail:"https://cdn1.iconfinder.com/data/icons/food-drink-7/100/FD_align-08-512.png"},count:0},
                {name:"Plastic bag", cost:0.1, image:{thumbnail:"https://cdn1.iconfinder.com/data/icons/food-drink-7/100/FD_align-08-512.png"},count:0}]

class PlasticPledge extends Component{
  constructor(props) {
    super(props);
    this.state = {data:MOCK_DATA}
  }

  render(){
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    const data = this.state.data
    var dataSource = ds.cloneWithRows(data)
    return(
      <ListView
        dataSource={dataSource}
        renderRow={this.renderPlastic}
        style = {styles.listview}
        />
    )
  }

  renderPlastic(item){
    return (
      <View style={styles.container}>
        <Image
          source={{uri: item.image.thumbnail}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.year}>${item.cost}</Text>
        </View>
      </View>
    );
  }



}


var styles = StyleSheet.create({
  container: {
    flex: 1,
     flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  rightContainer: {
   flex: 1,
 },
 listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  button: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 7,
  }
});

AppRegistry.registerComponent('PlasticPledge', () => PlasticPledge);
