import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AlarmScreen from "../screens/AlarmScreen";
import CreateAlarmScreen from "../screens/CreateAlarmScreen";

const NativeStack = createNativeStackNavigator();

const AlarmStack = () => {
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "white" },
      }}
    >
      <NativeStack.Screen name="Alarm" component={AlarmScreen} />
      <NativeStack.Screen name="CreateAlarm" component={CreateAlarmScreen} />
    </NativeStack.Navigator>
  );
};

export default AlarmStack;
