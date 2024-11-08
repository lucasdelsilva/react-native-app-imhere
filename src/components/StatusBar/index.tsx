import { StatusBar, View } from "react-native";
import { styles } from "./styles";


export function StatusBarComponent() {
    return (
        <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
        />
    );
}