import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  Modal,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
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
  Segment,
  Card,
  CardItem

} from "native-base";
import styles from "./styles";
var common = require("../../utils/common");
const { width, height } = Dimensions.get('window');

import { Stepper } from 'react-native-usit-ui';
import ResponsiveImage from 'react-native-responsive-image';

class Basket extends Component {
  constructor(props) {
    super(props);
    const {params} = this.props.navigation.state;
    const product = params.product;

    var productData =[];
    productData.push(product);
    var totalPrice = 0;
    for(var i=0;i<productData.length;i++){
        totalPrice = totalPrice+productData[i].price;
    }

    this.state = {
      currentImageSource : require("../../assets/groceries/500-white-peas-dried-peas-ekgaon-original-imafyfnc4zzzgxfv.jpeg"),
      imgIndex : 0,
      pincode : '560066',
      productData: productData,
      totalPrice : totalPrice
    };
  }
  gotoProductImageDetails() {
    var self = this;
    const {navigate} = this.props.navigation;
    //navigate('ProductImageDetails',{ "product" :  product})
  }
  setCurrentImage(imageSource,index) {
    var self = this;
    self.setState({
      currentImageSource : imageSource,
      imgIndex : index
    })
  }
  addedItems(value,itemIndex) {
    var self = this;
    var productData1 = self.state.productData[itemIndex];
    productData1["addedItems"] = value;
    if(value == 0) {
      productData1["addItem"] = false;
    }
    var productData = self.state.productData;
    productData[itemIndex] = productData1;

   //alert(JSON.stringify(productData))
    self.setState({
      productData: productData,
      //addItem : value == 0 ? false : true
    });
  }
  render() {
        const {params} = this.props.navigation.state;
        var self = this;
        var items = self.state.productData;
        return (
          <Container style={styles.container}>
          <Content>
            <Header>
              <Left>
                <Button transparent onPress={() => this.props.navigation.goBack()}>
                  <Icon name="arrow-back" />
                </Button>
              </Left>
              <Body>
                <Title>M Mart Basket</Title>
              </Body>
              <Right />
            </Header>
            <View style={{width:width,elevation : 2,borderBottomWidth : 2,borderBottomColor : 'transparent',alignItems : 'center',flexDirection : 'row',padding : 15}}>
              <View style={{flex : 1,flexDirection : 'row'}}>
                <Text style={{fontWeight : 'bold'}}>Pincode</Text>
                <Text>  </Text>
                <Text style={{color : 'rgba(30,144,255,1)',fontWeight : 'bold'}}>{self.state.pincode}</Text>
              </View>
              <View>
                <Button small><Text>Change</Text></Button>
              </View>
            </View>
            <List thumbnail dataArray={items}
                  renderRow={(item,s,itemIndex) =>
                    <ListItem >
                    <TouchableHighlight onPress={()=> self.gotoProductDetails(self.state.productData[itemIndex])}>
                      <Thumbnail square size={80}
                        source={require("../../assets/groceries/500-white-peas-dried-peas-ekgaon-original-imafyfnc4zzzgxfv.jpeg")} />
                    </TouchableHighlight>
                      <Body>
                        <Text>{self.state.productData[itemIndex].productName}</Text>
                        <Text numberOfLines={1} note >{self.state.productData[itemIndex].defaultQty}</Text>
                          <View style={{flex : 1,flexDirection : 'row',paddingTop : 10}}>
                            <Text  style={{fontWeight : 'bold',color:'rgba(0,0,0,1)', fontSize:18}}>₹{self.state.productData[itemIndex].price}</Text>
                            <Text style={{textDecorationLine:'line-through',fontWeight : '400',color:'rgba(0,0,0,0.5)', fontSize:14}}>{self.state.productData[itemIndex].actualPrice}</Text>
                            <Text style={{color : 'green',fontWeight : '400'}}>{self.state.productData[itemIndex].discount} % off</Text>
                          </View>
                          <View style={{flexDirection : 'row',paddingTop : 5,paddingLeft : 10}}>
                            <Stepper minValue={1} interval={1} onChange={(value) => self.addedItems(value,itemIndex)}
                               maxValue={20} initialValue={self.state.productData[itemIndex].addedItems} color="#007aff" />
                          </View>
                      </Body>
                    </ListItem>
                  }>
                </List>
            </Content>
            <View style={{flexDirection : 'row',paddingLeft :5,paddingRight : 5,position : 'absolute', bottom : 0,borderTopWidth : 1,borderTopColor : 'rgba(0,0,0,0.5)'}}>
              <View style={{flex : 1,justifyContent : 'center',padding : 10}}>
                <TouchableHighlight>
                  <Text style={{fontSize : 20}}>₹ {self.state.totalPrice}</Text>
                </TouchableHighlight>
              </View>
              <View style={{flex : 1,padding : 5,alignItems : 'center',justifyContent : 'flex-end'}}>
                <Button small style={{alignSelf : 'center'}}>
                  <Text>Continue</Text>
                </Button>
              </View>
            </View>
          </Container>
        );
  }
}

export default Basket;
