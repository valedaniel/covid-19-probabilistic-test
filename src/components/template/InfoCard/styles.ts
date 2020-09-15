import { StyleSheet, Dimensions } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        backgroundColor: '#DADADA',
        width: DEVICE_WIDTH * 0.8,
        alignSelf: 'center',
        borderRadius: 10,
        marginVertical: 15,
    },
    text: {
        fontSize: DEVICE_WIDTH * 0.035,
        color: '#202428',
        marginVertical: 5
    },
    icon: {
        position: 'absolute',
        fontSize: DEVICE_WIDTH * 0.065,
        marginTop: 15,
        marginLeft: 25
    },
    viewTitle: {
        width: '100%',
        alignItems: 'center'
    },
    viewContent: {
        alignItems: 'center',
        marginVertical: 20
    },
    title: {
        fontWeight: 'bold',
        marginTop: 15,
        fontSize: DEVICE_WIDTH * 0.05,
    }
});