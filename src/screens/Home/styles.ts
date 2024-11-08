import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#131016'
    },
    eventName: {
        marginTop: 48,
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold'
    },
    eventeDate: {
        fontSize: 16,
        color: '#6B6B6B'
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 10,
        color: '#fff',
        padding: 15,
        fontSize: 16,
        marginRight: 12
    },
    buttonText: {
        fontSize: 24,
        color: '#fff'
    },
    button: {
        height: 56,
        width: 56,
        borderRadius: 10,
        backgroundColor: '#31cf67',
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42
    },
    listEmpty: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center'
    }
});