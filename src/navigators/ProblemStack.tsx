import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AlarmScreen from "../screens/AlarmScreen";
import CreateAlarmScreen from "../screens/CreateAlarmScreen";
import ProblemScreen from "../screens/ProblemScreen";
import CreateProblemScreen from "../screens/CreateProblemScreen";

const NativeStack = createNativeStackNavigator();

const ProblemStack = () => {
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "white" },
      }}
    >
      <NativeStack.Screen name="Problem" component={ProblemScreen} />
      <NativeStack.Screen
        name="CreateProblem"
        component={CreateProblemScreen}
      />
    </NativeStack.Navigator>
  );
};

export default ProblemStack;
