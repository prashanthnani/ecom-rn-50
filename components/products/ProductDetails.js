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

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    const {params} = this.props.navigation.state;
    this.state = {
      currentImageSource : require("../../assets/groceries/500-white-peas-dried-peas-ekgaon-original-imafyfnc4zzzgxfv.jpeg"),
      imgIndex : 0,
      selectedQty : params.product["defaultQty"],
      btnTxt : 'ADD TO BASKET',

    };
  }
  gotoProductImageDetails() {
    var self = this;
    const {navigate} = this.props.navigation;
    const {params} = this.props.navigation.state;
    navigate('ProductImageDetails',{ "product" : params.product })
  }
  setCurrentImage(imageSource,index) {
    var self = this;
    self.setState({
      currentImageSource : imageSource,
      imgIndex : index
    })
  }
  selectQty(qty) {
    var self = this;
    self.setState({
      selectedQty : qty
    })
  }
  addToBasket() {

    var self = this;
    if((self.state.btnTxt).toUpperCase() == "GO TO BASKET") {
      self.goToBasket();
    } else {
      self.setState({
        btnTxt : 'GO TO BASKET'
      })
    }

  }
  goToBasket() {
    var self = this;
    const {navigate} = this.props.navigation;
    const {params} = this.props.navigation.state;
    navigate('Basket',{ "product" : params.product })
  }
  render() {
        const {params} = this.props.navigation.state;
        var product = params.product;
        var self = this;
        return (
          <Container style={styles.container}>
          <Content style={{paddingBottom : 60}}>
            <Header>
              <Left>
                <Button transparent onPress={() => this.props.navigation.goBack()}>
                  <Icon name="arrow-back" />
                </Button>
              </Left>
              <Body>
                <Title>Product Details</Title>
              </Body>
              <Right />
            </Header>
            <TouchableOpacity onPress={()=> self.gotoProductImageDetails()} style={{padding : 10,alignItems : 'center',justifyContent : 'center'}} >
              <ResponsiveImage source={self.state.currentImageSource} style={{height : 250, width : width-50}}/>
            </TouchableOpacity>
            <View style={{flexDirection : 'row',width:width, paddingBottom :5 }}>
            {
              product["productImages"].map(function(productImage,imgIndex){
                    if(imgIndex < 3) {
                      return(<TouchableOpacity key={common.guid()} onPress={()=> self.setCurrentImage(productImage["image"], imgIndex)}
                                style={{borderColor : self.state.imgIndex == imgIndex ? 'rgba(30,144,255,1)' : 'rgba(0,0,0,0.5)',marginRight : 5,
                                borderRadius : 4, borderWidth: self.state.imgIndex == imgIndex ? 2 : 1 }}>
                                <Thumbnail square size={80} style={{margin : 5}} source={productImage["image"]} />
                            </TouchableOpacity>)
                    } else if(imgIndex == 3) {
                        return(<TouchableOpacity key={common.guid()}  onPress={()=> self.gotoProductImageDetails()}
                                  style={{borderColor : 'rgba(30,144,255,1)', borderRadius : 4, borderWidth: self.state.imgIndex == imgIndex ? 2 : 0 }}>
                                    <Thumbnail  square size={80} style={{margin : 5}}source={productImage["image"]} />
                                      <View style={{height : 80, width : 80,position:'absolute',bottom:0,borderRadius : 4, backgroundColor : 'rgba(0,0,0,0.4)',
                                      alignItems : 'center',justifyContent : 'center'}}>
                                        <Text style={{color : 'rgba(255,255,255,1)', fontWeight : 'bold'}}>+{(product["productImages"].length-1)-3}</Text>
                                      </View>
                            </TouchableOpacity>)

                    }
                })
            }
            </View>
            <View style={{width : width,borderRadius : 1, elevation : 1,paddingTop : 10,paddingBottom :10}}>
              <Text style={{color:'rgba(0,0,0,0.7)',marginLeft : 14}}>{product.productName}</Text>
              <View style={{flex : 1,flexDirection : 'row',paddingTop : 10}}>
                <View style={{flex : 1,flexDirection : 'row',paddingLeft :14}}>
                  <Text  style={{lineHeight : 30,fontWeight : 'bold',color:'rgba(0,0,0,1)', fontSize:20}}>₹{product.price}
                  </Text>
                  <Text style={{lineHeight : 30,textDecorationLine:'line-through',fontWeight : '400',color:'rgba(0,0,0,0.5)', fontSize:14}}>{product.actualPrice}</Text>
                  <Text style={{lineHeight : 30,color : 'green',fontWeight : '500'}}>  {product.discount} % off</Text>
                </View>
                <View style={{flex : 1,paddingRight : 14}}>
                <Text style={{lineHeight : 30,color : 'rgba(0,0,0,0.5)', fontWeight : '400',textAlignVertical:'center',
                alignSelf:'flex-end',textAlign : 'right'}}>@{product.price}/kg</Text>
                </View>
              </View>
            </View>
            <View style={{width : width,paddingLeft :14,borderRadius : 1,marginTop : 10,paddingBottom :10,elevation : 1}}>
              <View style={{flex : 1,flexDirection : 'row',paddingTop : 10}}>
                <Text style={{lineHeight : 30,color : 'rgba(0,0,0,0.8)'}}> Quantity : </Text>
                <Text style={{lineHeight : 30,color : 'rgba(30,144,255,1)'}}>{self.state.selectedQty}</Text>
              </View>
              <View style={{flex : 1,flexDirection : 'row',paddingTop : 10}}>
                {
                  product["quantityWarients"].map(function(qtyWarient) {
                    var sQty = (self.state.selectedQty).toLowerCase();
                    var bColor = (sQty !== qtyWarient.toLowerCase()) ? 'rgba(0,0,0,0.5)' : 'rgba(0,122,255,1)';
                    return(<Button key={common.guid()} onPress={()=> self.selectQty(qtyWarient)}bordered style={{marginRight : 20, borderColor: bColor }}>
                            <Text style={{color : bColor}}>{qtyWarient}</Text>
                          </Button>)
                  })
                }
              </View>
            </View>
            <View style={{flex : 1,alignItems : 'center', justifyContent : 'center',borderRadius : 1,marginTop : 10,paddingBottom :10,elevation : 1}}>
                <Button full warning onPress={()=>self.addToBasket()} >
                  <Text>{self.state.btnTxt}</Text>
                </Button>
            </View>
          </Content>
        </Container>
      );
  }
}

export default ProductDetails;
