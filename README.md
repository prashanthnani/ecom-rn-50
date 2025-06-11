# 🛒 E-Commerce Grocery App (React Native)

A comprehensive React Native e-commerce application for grocery shopping with extensive UI components, Redux state management, and Firebase integration.

## 📱 Project Overview

**ecom-rn-50** is a feature-rich grocery shopping mobile application built with React Native. The app provides a complete shopping experience with categories, subcategories, product listings, shopping basket functionality, and various UI components powered by NativeBase.

### 🏗️ Architecture

- **Frontend**: React Native 0.52.2
- **State Management**: Redux with Redux Thunk
- **UI Library**: NativeBase 2.3.8
- **Navigation**: React Navigation 1.0.0-beta.27
- **Backend**: Firebase (Database & Authentication)
- **Additional Libraries**: Various specialized components for enhanced UX

## ✨ Key Features

### 🛍️ E-Commerce Core Features
- **Product Categories**: Organized into 6 main categories (Staples, Snacks & Beverages, Packaged Food, Personal & Baby Care, Household Care, Dairy & Eggs)
- **Subcategory Navigation**: Hierarchical product browsing
- **Product Details**: Comprehensive product information with image gallery
- **Shopping Basket**: Add/remove items with quantity management
- **Price Management**: Regular price, discount price, and percentage off calculations

### 📱 UI Components Showcase
The app serves as a comprehensive showcase of NativeBase components:
- **Headers**: 8 different header variations
- **Footers**: Basic, Icon, Badge footers
- **Buttons**: Default, Outline, Rounded, Block, Full, Custom, Transparent, Icon, Disabled
- **Cards**: Basic, Image, Showcase, List, Header & Footer variations
- **Forms**: Fixed Label, Inline, Floating, Placeholder, Stacked, Regular, Underline, Rounded, Icon inputs
- **Lists**: Basic, Divider, Separator, Header, Icon, Avatar, Thumbnail lists
- **Navigation**: Tabs (Basic, Config, Scrollable), Segments, Drawer navigation
- **Advanced Components**: FAB, Deck Swiper, Pickers, Action Sheets, Spinners

### 🔧 Technical Features
- **Redux State Management**: Centralized state for products and UI
- **Firebase Integration**: Real-time data synchronization
- **Responsive Design**: Adaptive layouts for different screen sizes
- **Navigation**: Stack and Drawer navigation patterns
- **Code Push**: Over-the-air updates capability
- **Google Sign-In**: Social authentication integration
- **Maps Integration**: Location-based features
- **Offline Support**: Redux persist and simple store

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v12 or higher)
- React Native CLI
- Android Studio / Xcode
- Firebase Account

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecom-rn-50
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Firebase Setup**
   - Create a Firebase project
   - Configure authentication and database
   - Update `firebase.js` with your config:
   ```javascript
   const firebaseApp = initializeApp({
     apiKey: "your-api-key",
     authDomain: "your-auth-domain",
     databaseURL: "your-database-url",
     storageBucket: "your-storage-bucket"
   })
   ```

4. **Platform Setup**
   
   **For Android:**
   ```bash
   react-native run-android
   ```
   
   **For iOS:**
   ```bash
   cd ios && pod install
   react-native run-ios
   ```

## 📁 Project Structure

```
ecom-rn-50/
├── actions/                 # Redux actions
│   ├── actionTypes.js
│   └── productsAction.js
├── components/              # React components
│   ├── categories/         # Category-related components
│   ├── products/           # Product components (Details, Basket)
│   ├── subCategories/      # Subcategory components
│   └── subCatListItem/     # List item components
├── screens/                # UI component showcases
│   ├── header/            # Header variations
│   ├── footer/            # Footer variations
│   ├── button/            # Button variations
│   ├── card/              # Card variations
│   ├── form/              # Form variations
│   ├── list/              # List variations
│   └── [other UI components]/
├── reducers/              # Redux reducers
├── store/                 # Redux store configuration
├── utils/                 # Utility functions
├── assets/                # Images and static files
├── native-base-theme/     # Custom theme configuration
├── App.js                 # Main application component
├── firebase.js            # Firebase configuration
├── groceries.json         # Product data structure
└── package.json
```

## 🛒 App Flow

1. **Splash Screen**: Initial loading screen
2. **Categories List**: Main category selection (6 categories)
3. **Subcategory Selection**: Detailed subcategory browsing
4. **Product Listing**: Products within selected subcategory
5. **Product Details**: Detailed product view with images
6. **Shopping Basket**: Cart management with quantity controls
7. **UI Components**: Extensive component showcase sections

## 📊 Data Structure

### Category Hierarchy
```json
{
  "Staples": [
    {"Dals & Pulses": ["All", "Toor Dal", "Urad Dal", ...]},
    {"Ghee & Oils": ["All", "Ghee", "Sunflower Oil", ...]},
    ...
  ],
  "Snacks & Beverages": [...],
  "Packaged Food": [...],
  "Personal & Baby Care": [...],
  "Household Care": [...],
  "Dairy & Eggs": [...]
}
```

## 🔄 State Management

The app uses Redux for state management with the following structure:
- **Products State**: Manages product data, categories, and shopping cart
- **UI State**: Handles component states and navigation
- **Firebase Sync**: Real-time data synchronization with Firebase

## 🎨 UI/UX Features

- **Material Design**: Following Android design principles
- **Native Base Components**: Consistent UI across platforms
- **Responsive Layout**: Adapts to different screen sizes
- **Image Optimization**: Responsive image loading
- **Smooth Navigation**: Stack and drawer navigation patterns
- **Loading States**: Spinners and loading indicators
- **Error Handling**: User-friendly error messages

## 🧪 Testing

Run tests using:
```bash
npm test
```

## 📱 Supported Platforms

- **Android**: API level 16+
- **iOS**: iOS 9.0+

## 🔧 Development Tools

- **Hot Reloading**: Fast development iteration
- **Redux DevTools**: State debugging
- **React Native Debugger**: Component inspection
- **Code Push**: OTA updates

## 📋 Available Scripts

- `npm start`: Start the React Native packager
- `npm test`: Run the test suite
- `react-native run-android`: Run on Android device/emulator
- `react-native run-ios`: Run on iOS device/simulator

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **NativeBase Team**: For the comprehensive UI component library
- **React Native Community**: For the robust ecosystem
- **Firebase Team**: For the backend services
- **Contributors**: All developers who contributed to this project

## 📞 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the component showcase sections

---

**Version**: 0.0.2  
**React Native**: 0.52.2  
**NativeBase**: 2.3.8