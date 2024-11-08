import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1f1e25',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    name: {
        marginLeft: 16,
        flex: 1,
        fontSize: 16,
        color: '#fff'
    },
    buttonText: {
        fontSize: 24,
        color: '#fff'
    },
    button: {
        height: 56,
        width: 56,
        borderRadius: 10,
        backgroundColor: '#e23c44',
        alignItems: 'center',
        justifyContent: 'center'
    },
});