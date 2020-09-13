import { StyleSheet, Dimensions } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: {
        marginTop: 10,
        color: '#fff',
    },
    title: {
        fontSize: DEVICE_WIDTH * 0.06,
    },
    subTitle: {
        fontSize: DEVICE_WIDTH * 0.045,
    },
    image: {
        width: DEVICE_WIDTH * 0.3,
        height: DEVICE_WIDTH * 0.3,
        marginTop: 25
    }
});