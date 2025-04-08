// // App.tsx or DrawerNavigator.tsx
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { Text, View, Image } from 'react-native';
// import HomeScreen from '@/screens/HomeScreen';

// function ProfileScreen() {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Profile Screen</Text>
//         </View>
//     );
// }

// const Drawer = createDrawerNavigator();

// const LogoTitle = () => (
//     <Image
//         source={{ uri: 'https://i.imgur.com/drzZwS1.png' }}
//         style={{ width: 40, height: 40, resizeMode: 'contain' }}
//     />
// );

// export const DrawerNavigator = () => {
//     return (
//         <Drawer.Navigator initialRouteName="Home">
//             <Drawer.Screen
//                 name="Home"
//                 component={HomeScreen}
//                 options={{
//                     headerTitle: () => <LogoTitle />,
//                 }}
//             />
//             <Drawer.Screen
//                 name="Profile"
//                 component={ProfileScreen}
//                 options={{
//                     headerTitle: () => <LogoTitle />,
//                 }}
//             />
//         </Drawer.Navigator>
//     );
// };
