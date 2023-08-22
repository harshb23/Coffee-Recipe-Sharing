import MainComponent from "./src/components/main/mainComponent";
import { AuthProvider } from "./src/contexts/AuthContext";
import { RootSiblingParent } from "react-native-root-siblings";
import { LogBox } from "react-native";

const App = () => {
  LogBox.ignoreLogs(["Asyncstorage: ..."]); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  return (
    <AuthProvider>
      <RootSiblingParent>
        <MainComponent />
      </RootSiblingParent>
    </AuthProvider>
  );
};

export default App;
