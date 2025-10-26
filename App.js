import AllWords from "./screens/AllWords";
import AddWord from "./screens/AddWord";
import EditWord from "./screens/EditWord";
import { COLORS } from "./constants";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
         <Stack.Navigator
      screenOptions={{
        headerTitleStyle: { fontWeight: "800" },
        headerTransparent: true,
        headerTintColor: COLORS.primary900,
        headerTitleAlign: "center",
        contentStyle: { backgroundColor: COLORS.appBackground },
      }}
    >
      <Stack.Screen
        name="AllWords"
        options={{
          headerShown: false,
        }}
        component={AllWords}
      />
      <Stack.Screen
        name="AddWord"
        options={{
          title: "Add Word",
        }}
        component={AddWord}
      />
      <Stack.Screen
        name="EditWord"
        options={({ route }) => {
          const word = route.params.wordData.word;
          return {
            title: `Editing word "${word}"`,
          };
        }}
        component={EditWord}
      />
    </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
