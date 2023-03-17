import React from "react";
import { Avatar } from 'react-native-paper';

import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../styles/Styles';
import { color } from '../config/theme';

import Home from '../screens/Home';
import Clients from '../screens/Clients';
import Register from '../screens/Register';

//CREATING STACK NAVIGATION
//**Set the top bar */
const Stack = createStackNavigator();

export const StackNavItem = ({ name, title, component }: any) => {
	return (
		<Stack.Navigator>
			<Stack.Screen name={name} component={component}
				options={{
					title: title,
					headerLeft: () => (<Avatar.Image source={require('../img/default-avatar.png')} size={50} style={styles.ml} />),
					headerRight: () => (<Icon name="cog-outline" color={color.dark} size={26} style={[styles.mr]} />),
					headerStyle: [styles.bgWhite, styles.borderBottom],
					headerTintColor: `${color.dark}`,
					headerTitleStyle: [styles.textBold],
					headerTitleAlign: 'center',
				}} />
		</Stack.Navigator>
	);
}

//**Bottom tabs
export const HomeStack = () => <StackNavItem name='HomeStack' title='Inicio' component={Home} />

export const ClientsStack = () => <StackNavItem name='ClientsStack' title='Clientes' component={Clients} />

export const RegisterStack = () => <StackNavItem name='DailyRegisterStack' title='Registro' component={Register} />

const Tab = createMaterialBottomTabNavigator();
const BottomTabNavigator = () => {

	return (
		<Tab.Navigator
			shifting={true}
			activeColor={color.primary}
			inactiveColor={color.dark}
			barStyle={[styles.bgWhite, styles.borderTop]}
		>

			<Tab.Screen name="Home" component={HomeStack}
				options={{
					tabBarLabel: 'Inicio',
					tabBarIcon: ({ color }) => (
						<Icon name="home-outline" color={color} size={26} />
					)
				}} />
			<Tab.Screen name="Clients" component={ClientsStack}
				options={{
					tabBarLabel: 'Clientes',
					tabBarIcon: ({ color }) => (
						<Icon name="account-group-outline" color={color} size={26} />
					)
				}} />
			<Tab.Screen name="Register" component={RegisterStack}
				options={{
					tabBarLabel: 'Registro',
					tabBarIcon: ({ color }) => (
						<Icon name="text-box-outline" color={color} size={26} />
					)
				}} />
		</Tab.Navigator>
	);
};

export default BottomTabNavigator;