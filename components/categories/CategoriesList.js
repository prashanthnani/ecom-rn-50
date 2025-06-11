import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  Modal
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
  Tabs
} from "native-base";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProducts , loadProductsActionCreator, deleteProductsActionCreator } from "../../actions/productsAction";

import styles from "./styles";

const sankhadeep = require("../../assets/contacts/sankhadeep.png");
const supriya = require("../../assets/contacts/supriya.png");
const himanshu = require("../../assets/contacts/himanshu.png");
const shweta = require("../../assets/contacts/shweta.png");
const shruti = require("../../assets/contacts/shruti.png");
const shivraj = require("../../assets/contacts/shivraj.jpg");

import SubCatList from "../subCategories/SubCatList";

const datas = [
  {
    img: sankhadeep,
    text: "Sankhadeep",
    note: "Its time to build a difference . ."
  },
  {
    img: supriya,
    text: "Supriya",
    note: "One needs courage to be happy and smiling all time . . "
  },
  {
    img: shivraj,
    text: "Shivraj",
    note: "Time changes everything . ."
  },
  {
    img: shruti,
    text: "Shruti",
    note: "The biggest risk is a missed opportunity !!"
  },
  {
    img: himanshu,
    text: "Himanshu",
    note: "Live a life style that matchs your vision"
  },
  {
    img: shweta,
    text: "Shweta",
    note: "Failure is temporary, giving up makes it permanent"
  }
];

const groceryCategories1 = {
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

class CategoriesList extends Component {

  constructor(props) {
    super(props);
    this.state = {currentItem: "", modalVisible : false};
  }
  _onPressItem(cItem) {
    //alert(cItem)
    this.setState({
      currentItem : cItem,
      modalVisible : true
    })
  }
  openModal() {
    this.setState({modalVisible:true});
  }
  closeModal1() {
    this.setState({modalVisible:false});
  }
  closeModal(subCat) {

    this.setState({modalVisible:false});
    const {navigate} = this.props.navigation;

    //  /*  navigate('Question3',{ 'voteTo' : params.voteTo , 'nextCM' : option, 'location' : params.location})
    navigate('SubCatList', { 'subCat' : subCat, 'mainCat' : this.state.currentItem})
  /*  this.props.navigation.dispatch({
        type : 'ReplaceCurrentScreen',
        routeName : 'SubCatList',
        key : 'SubCatList',
        params : { 'subCat' : subCat}

      });*/
  }

  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    var groceryCategories =  this.props.products;
    var items = Object.keys(groceryCategories);
    if(this.state.modalVisible) {
      return(<Modal
             visible={this.state.modalVisible}
             animationType={'slide'}
             onRequestClose={() => this.closeModal1()}
         >
          <Container style={styles.container}>
            <Content>
              <Header>
                <Left>
                  <Button transparent onPress={() => this.closeModal1()}>
                    <Icon name="arrow-back" />
                  </Button>
                </Left>
                <Body>
                  <Title>{this.state.currentItem}</Title>
                </Body>
                <Right />
              </Header>
            <List thumbnail dataArray={groceryCategories[this.state.currentItem]}
                  renderRow={(subCat) =>
                    <ListItem onPress={()=>this.closeModal(subCat)}>
                    <Body>
                    <Text>{Object.keys(subCat)}</Text>
                    </Body>
                    <Right>
                      <Button transparent onPress={()=>this.closeModal(subCat)} >
                        <Icon name="ios-arrow-dropright" />
                      </Button>
                    </Right>
                    </ListItem>
                  }>
                </List>
            </Content>
          </Container>
    </Modal>)
    }

    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Shop by Categories</Title>
          </Body>
          <Right><Button transparent onPress={() => this.props.deleteProductsActionCreator(this.props.products)}>
            <Icon name="md-trash" />
          </Button>
          <Button transparent onPress={() => this.props.loadProductsActionCreator()}>
            <Icon name="md-refresh" />
          </Button>
          </Right>
        </Header>
        <Header searchBar rounded>
          <Item>
            <Icon active name="search" />
            <Input placeholder="Search" />
            <Icon active name="people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content>
        <List thumbnail dataArray={items}
              renderRow={(item) =>
                <ListItem onPress={()=>this._onPressItem(item)}>
                <Body>
                <Text>{item}</Text>
                <Text numberOfLines={2} note>{getAllSubCategoriesString(groceryCategories[item])}</Text>
                </Body>
                <Right>
                  <Button transparent onPress={()=>this._onPressItem(item)}>
                    <Icon name="ios-arrow-down" />
                  </Button>
                </Right>
                </ListItem>
              }>
            </List>
        </Content>
      </Container>

    );
  }
}

function getAllSubCategoriesString(obj){
 var str = "";
 for(var i = 0; i < obj.length; i++) {
   str = str+ Object.keys(obj[i]);
 }

  return str;
}

const mapStateToProps = (state) => {
  const { products } = state.products
  return { products }
};

const mapDispatchToProps = (dispatch) => ({
  fetchProducts:()=> dispatch(fetchProducts()),
  loadProductsActionCreator: () => dispatch(loadProductsActionCreator()),
  deleteProductsActionCreator : (products) => dispatch(deleteProductsActionCreator(products))
});
export default connect(mapStateToProps,mapDispatchToProps)(CategoriesList);
