import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  Modal,
  ScrollView,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Thumbnail,
  Left,
  Body,
  Right,
  Item,
  Input,
  Tab,
  Tabs,
  ScrollableTab,
  Picker,
  Form,
  ActionSheet,
  Spinner,
  Segment

} from "native-base";
import styles from "./styles";
var common = require("../../utils/common");
const { width, height } = Dimensions.get('window');

import { Stepper } from 'react-native-usit-ui';
var opt1 = <View style={{height : 20,width : 20,backgroundColor : 'red'}}></View>;
var BUTTONS = [
  { text: "Option 0", icon: "american-football", iconColor: "#2c8ef4" },
  { text: "Option 1", icon: "analytics", iconColor: "#f42ced" },
  { text: "Option 2", icon: "aperture", iconColor: "#ea943b" },
  { text: "Delete", icon: "trash", iconColor: "#fa213b" },
  { text: "Cancel", icon: "close", iconColor: "#25de5b" }
];
var DESTRUCTIVE_INDEX = 2;
var CANCEL_INDEX = 3;


class SubCatListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentItem: "",
      productData : this.props.subcatlistitem

    };
  }

  onValueChange2(value,index) {
    //alert(value+ " --item index-- " +index )
    var self = this;
    var productData1 = self.state.productData[index];
    productData1["defaultQty"] = value;
    var productData = self.state.productData;

    productData[index] = productData1;

   //alert(JSON.stringify(productData))
    self.setState({
      productData: productData
    });
  }
  gotoProductDetails(product) {
  //  alert("skdhfkhsa")
    var self = this;
    const {navigate} = this.props.navigation;
    navigate('ProductDetails',{ "product" :  product})

  }
  addItem(itemIndex) {
    var self = this;

  }
  addedItems(value,itemIndex) {
    var self = this;

  }
  render() {
        var self = this;
        var itemIndex = self.props.itemIndex;
        return (<ListItem>
          <TouchableHighlight onPress={()=> self.gotoProductDetails(self.state.productData)}>
            <Thumbnail square size={80}
              source={require("../../assets/groceries/500-white-peas-dried-peas-ekgaon-original-imafyfnc4zzzgxfv.jpeg")} />
          </TouchableHighlight>
          <Body>
          <Text>{self.props.itemKey} - 1Kg</Text>
          <Text numberOfLines={1}>₹ {self.state.productData.price}</Text>
          <Text numberOfLines={1} note >@58/kg</Text>
          <View style={{flexDirection : 'row',paddingTop : 5,paddingLeft : 5}}>
            <Picker  style={{height: 40,width:105}}
              mode="dropdown"
              headerStyle={{ backgroundColor: "red" }}
              headerBackButtonTextStyle={{ color: "#fff" }}
              headerTitleStyle={{ color: "#fff" }}
              placeholder="500g"
              selectedValue={self.state.productData.defaultQty}
              onValueChange={(value) => self.onValueChange2(value,itemIndex)}
            >{
              self.state.productData.quantityWarients.map(function(weight){
                return(<Picker.Item key={common.guid()} label={weight} value={weight} />)
              })
            }
            </Picker>

            {
              !self.state.productData.addItem ? <Button Light small onPress={()=> self.addItem(itemIndex)}>
                <Text>Add Item</Text>
              </Button> : <Stepper minValue={0} interval={1} onChange={(value) => self.addedItems(value,itemIndex)}
                 maxValue={20} initialValue={self.state.productData.addedItems} color="#007aff" />
            }

          </View>
        </Body>
        </ListItem>
        );
  }
}
export default SubCatListItem;
