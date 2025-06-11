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

import SubCatListItem from "../subCatListItem/SubCatListItem";

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
const groceryCategories = {
  "Staples": [
    {"Dals & Pulses" : ["All","Toor Dal","Urad Dal","Moong Dal","Chana Dal","Other Pulses","Soya Chunks"]},
    {"Ghee & Oils" : ["All","Ghee","Sunflower Oil","Rice Bran","Olive Oil","Groundnut Oil","Mustard Oil","Other Oils"]},
    {"Atta & FLours" : ["All","Wheat","Rava & Sooji","Rice Flour","Maida","Besan","Other Flours","Grains"]},
    {"Massalas & Spices" : ["All","Whole Spices","Powered Spices","Ready Masalas","Cooking Pastes","Herbs & Seasonings"]},
    {"Rice & Rice Products" : ["All","Basmati Rice","Sona Masoori Rice","Other Rice Varieties","Poha","Puffed Rice"]},
    {"Dry Friuts, Nuts & Seeds" : ["All","Cashew Nuts","Almonds","Dates & Raisins","Dried Fruits","Edible Seeds","Other Nuts"]},
    {"Sugar, Jaggery & Salt" : ["All","Salt","Sugar","Sugar Free","Jaggery"]}
  ],
  "Snacks & Beverages" : [
    {"Biscuits" : ["All","Cookies","Cream Biscuits","Marie & Digestive","Milk & Clucose","Salted","Cheeslets","Wafers & Rusk"]},
    {"Chips, Namkeen & Snacks" : ["All","Namkeen","Chips","Popcorn, Papad & Fryums","Snacky Nuts"]},
    {"Tea" : ["All","Tea","Tea Bags","Green Tea"]},
    {"Coffee" : ["All","Roast & Ground","Instant Coffee"]},
    {"Juices" : ["All","Orange Juice","Apple Juice","Other Juices"]},
    {"Health Drink Mix" : ["All","Health Drink Mix"]},
    {"Soft Drinks" : ["All","Aerated Drinks","Fruit Drinks","Soda","Energy & Sports Drinks"]},
    {"Squash & Syrups" : ["All","Squash","Syrups","Fruit Crush"]}
  ],
  "Packaged Food": [
    {"Breakfast Cereals" : ["All","Flakes","Muesli","Oats","Cereal Bars"]},
    {"Noodles & Pasta" : ["All","Noodles","Pasta","Vermicelli"]},
    {"Ketchups & Spreads" : ["All","Ketchups","Dips & Spreads","Dressing Sauce"]},
    {"Chocolates & Sweets" : ["All","Chocolates","Sweets & Mithai","Candy & Gums","Cake"]},
    {"Jams & Honey" : ["All","Jams","Honey"]},
    {"Pickles & Chutney" : ["All","Pickles","Chutney"]},
    {"Ready To Cook" : ["All","Soups","Ready Mixes","Ready Meals"]},
    {"Cooking Sauces & Vinegar" : ["All","Cooking Sauce","Vinegar"]},
    {"Baking" : ["All","Baking Ingredients","Ready Baking Mixes","Baking Decoratives"]}
  ],
  "Personal & Baby Care" : [
    {"Soaps & Body Wash" : ["All","Soaps","Body Wash","Face Wash","Hand Wash","Hand Sanitizer"]},
    {"Hair Care" : ["All","Shampo","Conditioner","Hair Oil","Hair color","Hair Serum","Styling Products"]},
    {"Oral Care" : ["All","Toothpaste","Toothbrush","Mouthwash","Tongue Cleaners","Floss"]},
    {"Does, Perfumes & Talc" : ["All","Women's Deo","Perfumes","Talc"]},
    {"Creams, Lotions, Skin Care" : ["All","Creams","Body Lotion","Hair Removal","Sunscreen","Lip Care","Toner","Body Oil","Face Packs & Scrubs","Facial Tissues","Foot Care"]},
    {"Kajal & Makeup" : ["All","Kajal"]},
    {"Sanitary Needs" : ["All","Sanitary Pads","Tampons","Intimate Care"]},
    {"Wellness & Common Pharma" : ["All","Contraceptives","Cotton & Bandages","Chyawanprash","Digestives","Antiseptic","Pain Relievers"]},
    {"Shaving Needs" : ["All","Blades & Razor","Creams & Foam","After Shave","Shaving Brush"]},
    {"Diapers & Wipes" : ["All","Diapers","Wipes"]},
    {"Baby Foods" : ["All","Baby Cereal","Infant Formula"]},
    {"Baby Bath & Skin Care" : ["All","Baby Soaps","Baby Shampo","Baby Oil","Baby Cream","Baby Powder"]}
  ],
  "Household Care": [
    {"Detergents & Laundry" : ["All","Detergents","Fabric Care","Washing Bars"]},
    {"Utensil Cleaners" : ["All","Dishwash Liquid","Dishwash Bar","Scrub Pads"]},
    {"Floor & Other Cleaners" : ["All","Toilet Cleaners","Floor Cleaners","Kitchen Cleaners","Drain Cleaners","Glass Cleaners"]},
    {"Repellants & Fresheners" : ["All","Mosquito Repellants","Air Fresheners","Insecticides"]},
    {"Paper & Disposables" : ["All","Aluminium Foils","Paper Napkins","Garbage Bags","Toilet Paper","Disposable Plates & Utensils","Kitchen Roll"]},
    {"Basic Electricals" : ["All","Bulbs","Batteries"]},
    {"Pooja Needs" : ["All","Agarbatti & Dhoop"]}
  ],
  "Dairy & Eggs" : [
    {"Dairy" : ["All","Milk","Cheese","Curd & Yogurts","Butter & Speeds", "Soya Milk", "Buttermilk & Lassi", "Milk Powder"]},
    {"Eggs" : ["All","Egg"]}
  ]

};

class SubCatList extends Component {
  constructor(props) {
    super(props);
    const items = Object.keys(groceryCategories);
    const {params} = this.props.navigation.state;
    const subCatName = Object.keys(params.subCat);
    //const subCatArray = params.subCat[subCatName];
    var productData =[];
    for(var i=0;i<items.length;i++){
        productData.push({"productName" : "Moon Dal", "productMaincategory" : "Staples" ,
                          "productImages" : [{"image" : require("../../assets/groceries/500-white-peas-dried-peas-ekgaon-original-imafyfnc4zzzgxfv.jpeg")},
                              {"image" : require("../../assets/groceries/500-rajma-chitra-kidney-beans-rajma-ekgaon-original-imafyfmegmxbuuzv.jpeg")},
                              {"image" : require("../../assets/groceries/500-rajma-chitra-kidney-beans-rajma-ekgaon-original-imafyfmfpntgszy4.jpeg")},
                              {"image" : require("../../assets/groceries/200-natural-200g-pouch-delight-nuts-original-imaeyzpzzgw4gfsn.jpeg")},
                              {"image" : require("../../assets/groceries/500-cowpea-chawla-black-eyed-beans-go-earth-organic-original-imaevwkse4ecw3wd.jpeg")},
                              {"image" : require("../../assets/groceries/500-green-peas-sun-dried-dried-peas-ekgaon-original-imaez4fdbsafxhtn.jpeg")},
                              {"image" : require("../../assets/groceries/500-cowpea-chawla-black-eyed-beans-go-earth-organic-original-imaevwkse4ecw3wd.jpeg")}],
                         "productSubCategory" : "Dals & Pulses","productCategory": "Toor Dal",
                         "quantityWarients" : ["500g","1Kg"], "defaultQty" : "1Kg",
                         "price" : 45, "actualPrice" : 90, "discount" : 45 ,"addItem" : false, "addedItems" : 0});

    }
    this.state = {
      currentItem: "",
      modalVisible : this.props.modalVisible,
      productData: productData,
      subCatName : Object.keys(params.subCat),
      subCatArray : params.subCat[subCatName],
      addItem : false,

    };
  }
  _onPressItem(cItem) {
    //alert(cItem)
    this.setState({
      currentItem : cItem
    })
  }
  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
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
  selectOption() {
    ActionSheet.show(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        destructiveButtonIndex: DESTRUCTIVE_INDEX,
        title: "Select Option"
      },
      buttonIndex => {
        this.setState({
          clicked : buttonIndex
        })
      }
    )

  }
  addItem(itemIndex) {
    var self = this;
    var productData1 = self.state.productData[itemIndex];
    productData1["addItem"] = true;
    var productData = self.state.productData;

    productData[itemIndex] = productData1;

   //alert(JSON.stringify(productData))
    self.setState({
      productData: productData
    });

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
  gotoProductDetails(product) {
  //  alert("skdhfkhsa")
    var self = this;
    const {navigate} = this.props.navigation;
    navigate('ProductDetails',{ "product" :  product})

  }
  render() {
        const {params} = this.props.navigation.state;
        var previousParams = { 'subCat' : params.subCat, 'mainCat' : params.mainCat};
        var items = Object.keys(groceryCategories);
        var subItems = getAllSubCategoriesArray(groceryCategories[params.mainCat]);
        var self = this;


                return (
                  <Container style={styles.container}>
                      <Header hasTabs >
                        <Left>
                          <Button transparent>
                            <Icon name='arrow-back' onPress={() => this.props.navigation.goBack()} />
                          </Button>
                        </Left>
                        <Body>
                          <Title>{self.state.subCatName}</Title>
                        </Body>
                      </Header>
                    {/*  <View style={{height:40}}>
                        <Tabs renderTabBar={()=> <ScrollableTab />}>
                          {
                            subItems.map(function(catItem,catTabIndex){
                              return(<Tab key={common.guid()} heading={catItem.subCatStr}>
                                  </Tab>)
                              })
                          }
                        </Tabs>
                      </View> */}
                      <Tabs renderTabBar={()=> <ScrollableTab />}>
                      {/*<Spinner color='blue' />*/}
                      {
                        this.state.subCatArray.map(function(itemKey,tabIndex){
                          return(<Tab key={common.guid()} heading={itemKey}>
                            <List thumbnail dataArray={items}
                                  renderRow={(item,s,itemIndex) =>

                                    <SubCatListItem subcatlistitem={self.state.productData[itemIndex]} itemIndex={itemIndex}
                                   previousParams={previousParams} itemKey={itemKey} navigation={self.props.navigation}/>

                                  }>
                                </List>
                          </Tab>)
                        })
                      }
                      </Tabs>
                  </Container>
                );

        return (
          <Container style={styles.container}>
              <Header hasTabs >
                <Left>
                  <Button transparent>
                    <Icon name='arrow-back' onPress={() => this.props.navigation.goBack()} />
                  </Button>
                </Left>
                <Body>
                  <Title>{self.state.subCatName}</Title>
                </Body>
              </Header>
            {/*  <View style={{height:40}}>
                <Tabs renderTabBar={()=> <ScrollableTab />}>
                  {
                    subItems.map(function(catItem,catTabIndex){
                      return(<Tab key={common.guid()} heading={catItem.subCatStr}>
                          </Tab>)
                      })
                  }
                </Tabs>
              </View> */}
              <Tabs renderTabBar={()=> <ScrollableTab />}>
              {/*<Spinner color='blue' />*/}
              {
                this.state.subCatArray.map(function(itemKey,tabIndex){
                  return(<Tab key={common.guid()} heading={itemKey}>
                    <List thumbnail dataArray={items}
                          renderRow={(item,s,itemIndex) =>
                            <ListItem >
                            <TouchableHighlight onPress={()=> self.gotoProductDetails(self.state.productData[itemIndex])}>
                              <Thumbnail square size={80}
                                source={require("../../assets/groceries/500-white-peas-dried-peas-ekgaon-original-imafyfnc4zzzgxfv.jpeg")} />
                            </TouchableHighlight>
                              <Body>
                              <Text>{itemKey} - 1Kg</Text>
                              <Text numberOfLines={1}>₹ {self.state.productData[itemIndex].price}</Text>
                              <Text numberOfLines={1} note >@58/kg</Text>
                              <View style={{flexDirection : 'row',paddingTop : 5,paddingLeft : 5}}>
                                <Picker  style={{height: 40,width:105}}
                                  mode="dropdown"
                                  headerStyle={{ backgroundColor: "red" }}
                                  headerBackButtonTextStyle={{ color: "#fff" }}
                                  headerTitleStyle={{ color: "#fff" }}
                                  placeholder="500g"
                                  selectedValue={self.state.productData[itemIndex].defaultQty}
                                  onValueChange={(value) => self.onValueChange2(value,itemIndex)}
                                >{
                                  self.state.productData[itemIndex].quantityWarients.map(function(weight){
                                    return(<Picker.Item key={common.guid()} label={weight} value={weight} />)
                                  })
                                }
                                </Picker>

                                {
                                  !self.state.productData[itemIndex].addItem ? <Button Light small onPress={()=> self.addItem(itemIndex)}>
                                    <Text>Add Item</Text>
                                  </Button> : <Stepper minValue={0} interval={1} onChange={(value) => self.addedItems(value,itemIndex)}
                                     maxValue={20} initialValue={self.state.productData[itemIndex].addedItems} color="#007aff" />
                                }

                              </View>
                            </Body>
                            </ListItem>
                          }>
                        </List>
                  </Tab>)
                })
              }
              </Tabs>
          </Container>
        );


  }
}

export default SubCatList;
function getAllSubCategoriesString(obj){
 var str = "";
 for(var i = 0; i < obj.length; i++) {
   str = str+ Object.keys(obj[i]);
 }

  return str;
}

function getAllSubCategoriesArray(obj){
 var subCatArray = [];

 var subCatStr = "";
 for(var i = 0; i < obj.length; i++) {
   subCatStr = (Object.keys(obj[i]))[0];
   subCatArray.push({"subCatStr" : subCatStr});
 }

  return subCatArray;
}
