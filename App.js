import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import jsonData from './biodata.json';

const getNama = () => {
    let nama = jsonData.name;
    return(
        <Text style={styles.nama}>{ nama }</Text>
    );
}

const getPekerjaan = () => {
    let pekerjaan = '';
    for(let i=0; i<jsonData.jobs.length; i++) {
        pekerjaan += i+1 + ". " + jsonData.jobs[i].title + '\r\n';
    }
    return(
        <Text style={styles.content}>{ pekerjaan }</Text>
    );
}

const getAlamat = () => {
    let alamat = jsonData.address.hometown + ", " + jsonData.address.city + ", " + jsonData.address.provins + ".";
    return(
        <Text style={styles.content}>{ alamat }</Text>
    );
}

const App: () => React$Node = () => {
    return (
        <>
            <View>
                <Text style={styles.title}>Nama</Text>
                <Text style={styles.line}></Text>
                { getNama() }

                <Text></Text>

                <Text style={styles.title}>Pekerjaan</Text>
                <Text style={styles.line}></Text>
                { getPekerjaan() }

                <Text></Text>

                <Text style={styles.title}>Alamat</Text>
                <Text style={styles.line}></Text>
                { getAlamat() }
            </View>
        </>
    );
};

const styles = StyleSheet.create ({
    nama: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    content: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 30,
    },

    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
});

export default App;