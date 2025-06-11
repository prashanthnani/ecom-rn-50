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

class ProductImageDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageSource : require("../../assets/groceries/500-white-peas-dried-peas-ekgaon-original-imafyfnc4zzzgxfv.jpeg"),
      imgIndex : 0
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
  render() {
        const {params} = this.props.navigation.state;
        var self = this;
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
                <Title>Product Details</Title>
              </Body>
              <Right />
            </Header>
            <TouchableOpacity style={{alignItems : 'center',justifyContent : 'center'}} >
              <ResponsiveImage source={self.state.currentImageSource}
                              style={{height:height-76, width : width}} />
            </TouchableOpacity>
              <View style={{flexDirection : 'row', position : 'absolute',bottom :10,backgroundColor : 'rgba(255,255,255,0.5)'}}>
                <ScrollView horizontal={true} maximumZoomScale={4} >
                {
                  params.product["productImages"].map(function(productImage,imgIndex){
                    return(<TouchableOpacity key={common.guid()} onPress={()=> self.setCurrentImage(productImage["image"], imgIndex)}
                        style={{borderColor : 'rgba(30,144,255,1)', borderRadius : 2, borderWidth: self.state.imgIndex == imgIndex ? 2 : 0 }}>
                      <Thumbnail  square size={150} style={{margin : 5}} source={productImage["image"]} />
                    </TouchableOpacity>)
                  })
                }
                </ScrollView>
              </View>

            </Content>
          </Container>
        );
  }
}

export default ProductImageDetails;
