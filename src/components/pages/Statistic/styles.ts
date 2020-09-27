import { StyleSheet, Dimensions } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
    scrollView: {
        marginBottom: 20
    },
    containerPick: {
        backgroundColor: '#fff',
        width: DEVICE_WIDTH * 0.8,
        height: DEVICE_HEIGHT * 0.08,
        alignSelf: 'center',
        borderRadius: 25,
        paddingHorizontal: 15,
        marginVertical: 5
    },
    picker: {
        width: '100%',
        textAlign: 'center',
    },
    footerText: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 9
    },
    button: {
        width: DEVICE_WIDTH * 0.8,
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 10,
    },
    textButton: {
        textAlign: 'center',
        width: '100%',
        color: '#fff',
    },
});