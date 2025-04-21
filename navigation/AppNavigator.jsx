import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabsNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Placeholder screens (we'll create these next)
const HomeScreen = () => <></>;
const RentalsScreen = () => <></>;
const BuyScreen = () => <></>;
const ProfileScreen = () => <></>;

const Tab = createBottomTabsNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'Rentals') iconName = 'magnify';
            else if (route.name === 'Buy') iconName = 'heart';
            else if (route.name === 'Profile') iconName = 'account';
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#1E90FF',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Rentals" component={RentalsScreen} />
        <Tab.Screen name="Buy" component={BuyScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;