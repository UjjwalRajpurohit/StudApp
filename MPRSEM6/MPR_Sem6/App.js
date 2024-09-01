import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TimeTable from './components/TimeTable/TimeTable';
import Registration1 from './components/Registration/Registration1';
import Registration2 from './components/Registration/Registration2';
import Registration3 from './components/Registration/Registration3';
import Registration4 from './components/Registration/Registration4';
import LiveLocation from './components/LiveLocation/LiveLocation';
import RingerSilent from './components/RingerSilent/RingerSilent';
import Login from './pages/Login/Login';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import Cgpa from './pages/ProfilePage/Cgpa';
import ProfileLinks from './pages/ProfilePage/ProfileLinks';
import Scheduler from './pages/Scheduler/Scheduler';
import PushNotifications from './components/PushNotifications/PushNotifications';
import Roadmaps from './pages/Roadmaps/Roadmaps';
import Front from './pages/Roadmaps/Front';
import Back from './pages/Roadmaps/Back';
import Block from './pages/Roadmaps/Block';
import Ml from "./pages/Roadmaps/Ml";
import Devops from "./pages/Roadmaps/Devops"
import DataSci from "./pages/Roadmaps/DataSci"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Roadmaps">
        <Stack.Screen
          name="PushNotification"
          component={PushNotifications}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Front"
          component={Front}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Back"
          component={Back}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Block"
          component={Block}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Ml"
          component={Ml}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Devops"
          component={Devops}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DataSci"
          component={DataSci}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Roadmaps"
          component={Roadmaps}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TimeTable"
          component={TimeTable}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Scheduler"
          component={Scheduler}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfilePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cgpa"
          component={Cgpa}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileLinks"
          component={ProfileLinks}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registration1"
          component={Registration1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registration2"
          component={Registration2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registration3"
          component={Registration3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registration4"
          component={Registration4}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LiveLocation"
          component={LiveLocation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RingerSilent"
          component={RingerSilent}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
