import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class Services extends Component {
  constructor() {
    super();
    this.state = {
      numbers: [
        {id: '01', item: '1'},
        {id: '02', item: '2'},
        {id: '03', item: '3'},
        {id: '04', item: '4'},
        {id: '05', item: '5'},
        {id: '06', item: '6'},
        {id: '07', item: '7'},
        {id: '08', item: '8'},
        {id: '09', item: '9'},
        {id: '10', item: '10'},
      ],
    };
  }
  render() {
    return (
      <ScrollView
        style={{flex: 1, backgroundColor: '#EFF1F0', flexDirection: 'column'}}>
        <StatusBar barStyle="light-content" />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: 50,
            marginLeft: 50,
            marginTop: 40,
          }}>
          <FontAwesome5 name="bullseye" size={28} color="cyan" />
          <Text style={{marginLeft: 0, fontSize: 20}}>..................</Text>
          <FontAwesome5 name="bullseye" size={28} marginTop={30} />
          <Text style={{marginLeft: 0, fontSize: 20}}>..................</Text>
          <FontAwesome5 name="bullseye" size={28} />
        </View>
        <View style={styles.abc}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>Services</Text>
          <Text>Timings</Text>
          <Text>Location</Text>
        </View>
        <View>
          <Text style={styles.txtt}>Covid-19 Vaccination</Text>
        </View>
        <View
          style={{
            flex: 0.6,
            justifyContent: 'space-evenly',
            flexDirection: 'row',
          }}>
          <TextInput style={styles.box} multiline={true} editable={false}>
            Miniumum Hours
            <Text style={{fontSize: 30}}>2</Text>
          </TextInput>

          <TextInput style={styles.boxx} multiline={true} editable={false}>
            Price per hour RM <Text style={{fontSize: 30}}>35</Text>
          </TextInput>
          <TextInput style={styles.boxxx} multiline={true} editable={false}>
            Subsequent Hour RM <Text style={{fontSize: 30}}>35</Text>
          </TextInput>
        </View>
        <View>
          <Text style={styles.txt}>Select Your Hours</Text>
        </View>
        <View>
          <SafeAreaView>
            <FlatList
              horizontal={true}
              data={this.state.numbers}
              renderItem={({item}) => (
                <TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 60,
                      justifyContent: 'space-around',
                      padding: 20,
                    }}>
                    {item.item}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </SafeAreaView>
        </View>

        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            color: 'black',
          }}>
          or
        </Text>
        <Text style={styles.txt}>Packages</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TextInput style={styles.footer} editable={false}>
            {' '}
            2 Hours
          </TextInput>
          <TextInput multiline={true} style={styles.footerbx} editable={false}>
            {' '}
            RM54 per 2 hours {'\n'} Suitable for one session
          </TextInput>
        </View>
        <View style={{flex: 1, flexDirection: 'row', marginTop: 20}}>
          <TextInput style={styles.footer} editable={false}>
            {' '}
            10 Hours
          </TextInput>
          <TextInput multiline={true} style={styles.footerbx} editable={false}>
            RM 260 per 10 hours {'\n'}
            Suitable for multiple session for one or two weeks Hours
          </TextInput>
        </View>
        <View style={{flex: 1, flexDirection: 'row', marginTop: 20}}>
          <TextInput style={styles.footer} editable={false}>
            {' '}
            20 Hours
          </TextInput>
          <TextInput multiline={true} style={styles.footerbx} editable={false}>
            {' '}
            RM 500 per 20 hours{'\n'} Suitable for multiple session for one or
            two weeks Hours
          </TextInput>
        </View>
        <TouchableOpacity style={styles.tocuh2}>
          <Text style={{color: 'white'}}>NEXT</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  txt: {
    fontWeight: 'bold',
    marginTop: 50,
    color: 'black',
    fontSize: 20,
    margin: 40,
    marginBottom: 10,
  },
  txtt: {
    fontWeight: 'bold',
    marginTop: 50,
    color: 'black',
    fontSize: 20,
    margin: 40,
    marginBottom: 20,
  },
  tinput: {
    backgroundColor: 'white',
    marginTop: 30,
    height: 80,
  },
  //
  textinputc: {
    backgroundColor: 'cyan',
    fontWeight: '500',
    alignSelf: 'flex-end',
    borderRadius: 100,
    width: 50,
    padding: 10,
    textAlign: 'center',
  },
  tocuh2: {
    borderWidth: 1,
    padding: 12,
    width: 200,
    height: 55,
    borderRadius: 20,
    backgroundColor: '#24685b',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 100,
    marginTop: 40,
  },
  footer: {
    width: 100,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: 'orange',
    marginLeft: 30,
    fontWeight: 'bold',
  },
  footerbx: {
    width: 250,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: 'white',
    //  marginLeft:10
  },
  abc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 50,
    marginLeft: 50,
  },
  boxxx: {
    backgroundColor: 'white',
    marginRight: 80,
    // marginLeft: 5,
    alignSelf: 'flex-end',
    width: 95,
    height: 120,
    borderRadius: 30,
    borderColor: 'cyan',
    borderWidth: 1,
    justifyContent: 'space-between',
  },
  boxx: {
    backgroundColor: 'white',
    marginLeft: 20,
    alignSelf: 'flex-end',
    width: 95,
    height: 120,
    borderRadius: 30,
    borderColor: 'cyan',
    borderWidth: 1,
    marginTop: 10,
    justifyContent: 'space-between',
    marginRight: 80,
  },
  box: {
    backgroundColor: 'white',
    marginRight: 60,
    marginTop: 10,
    marginLeft: 90,
    alignSelf: 'flex-end',
    width: 95,
    height: 120,
    borderRadius: 30,
    borderColor: 'cyan',
    borderWidth: 1,
    // justifyContent:'center',
    justifyContent: 'space-between',
  },
  flist: {},
});
