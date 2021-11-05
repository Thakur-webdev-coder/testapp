// import { NavigationContainer } from '@react-navigation/native'

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Layout = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
};
const Colors = {
  theme: '#24685b',
  white: '#fff',
  greyish: '#a4a4a4',
};

const Home = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1}}>
      <StatusBar
        translucent={false}
        barStyle="light-content"
        backgroundColor={Colors.theme}
      />
      <View
        style={{
          backgroundColor: Colors.theme,
          paddingBottom: Layout.height * 0.08,
          borderBottomLeftRadius: Layout.width * 0.1,
          borderBottomRightRadius: Layout.width * 0.1,
        }}>
        <View
          style={{
            alignItems: 'center',
            paddingHorizontal: 32,
            marginVertical: 10,
          }}>
          <TouchableOpacity style={styles.tocuh3}>
            <FontAwesome5
              name={'syringe'}
              size={40}
              style={{color: Colors.white, alignItems: 'center'}}
            />
          </TouchableOpacity>
          <Text style={{color: 'white', fontSize: 'bold', fontSize: 20}}>
            Vaccination
          </Text>
        </View>
      </View>
      <View>
        <Text
          style={styles.txt}
          style={{
            color: 'cyan',
            margin: 10,
            marginLeft: 25,
            fontWeight: 'bold',
          }}>
          August 28 2021, 10:30 pm {'\n'}
        </Text>
        <Text style={styles.txt}>Location</Text>
        <TextInput editable={false} style={styles.textbox} multiline={true}>
          {' '}
          <FontAwesome5
            name={'street-view'}
            size={20}
            style={{color: 'red'}}
          />{' '}
          Luru Bilut,Pahang,Malasiya {'\n'}
          <FontAwesome5
            name={'ellipsis-v'}
            size={20}
            style={{color: 'black'}}
          />
          {'\n'}
          <Ionicons name={'location'} size={20} style={{color: 'cyan'}} />
          kinablu Sabah 88300 Malasiya
        </TextInput>
        <Text style={styles.txt}>Recipent</Text>
        <TextInput style={styles.textbox} multiline={true} editable={false}>
          <Image
            source={require('../covidinfo/src/component/assets/man.jpg')}
            style={styles.ImageStyle}
          />
          <Text style={{textAlign: 'center', alignItems: 'center'}}>
            {' '}
            Zane Mayes {'\n'}{' '}
          </Text>
        </TextInput>
        <Text style={styles.txt}>Mode of Transportation</Text>
        <TextInput style={styles.textbox} multiline={true} editable={false}>
          <FontAwesome5 name={'car'} size={25} style={{color: 'cyan'}} />
          kinablu Sabah 88300 Malasiya
        </TextInput>
        <Text style={styles.txt}>Temanion Prefrence</Text>
        <View style={styles.sameline}>
          <Text style={{padding: 15}}>Gender</Text>
          <Text style={{padding: 15, color: 'cyan'}}>female</Text>
        </View>
        <View style={styles.sameline}>
          <Text style={{padding: 15}}>Language</Text>
          <Text style={{padding: 15, color: 'cyan'}}>English</Text>
        </View>
      </View>
      <View style={styles.sameline}>
        <Text style={{padding: 15}}> 4 Hours</Text>
        <Text style={{padding: 15, color: 'cyan', fontSize: 20}}>RM90</Text>
      </View>
      {/* <View style={{flexDirection: 'row', borderBottomWidth: 2, margin: 15}}>
        <TextInput style={styles.textbox}>Coupne code</TextInput>
        <TouchableOpacity style={styles.tocuh}>
          <Text style={{color: 'black'}}>Apply</Text>
        </TouchableOpacity>
      </View> */}

      <View style={{flex: 1, flexDirection: 'row'}}>
        <TextInput style={styles.footer} editable={false}>
          {' '}
          Coupon Code
        </TextInput>
        <TextInput multiline={true} style={styles.footerbx} editable={false}>
          Apply
        </TextInput>
      </View>

      <View style={styles.sameline}>
        <Text style={{padding: 15, fontWeight: 'bold', color: 'black'}}>
          {' '}
          Total
        </Text>
        <Text style={{padding: 15, color: 'cyan', fontSize: 20}}>RM90</Text>
      </View>
      <TouchableOpacity style={styles.tocuh2}>
        <Text
          onPress={() => navigation.navigate('Services')}
          style={styles.txt}>
          Apply Now
        </Text>
        {/* <Button title="APPLY NOW"  color="#24685b"/> */}
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbox: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 35,
    marginVertical: 25,
    borderRadius: 20,
  },
  ImageStyle: {
    padding: 10,
    margin: '5',
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
    borderRadius: 10,
  },
  txt: {
    fontWeight: 'bold',
    paddingLeft: 20,
    marginHorizontal: 15,
    fontSize: 18,
    color: 'black',
  },
  txt1: {
    fontWeight: 'bold',
    paddingLeft: 20,
    fontSize: 20,
    color: 'cyan',
  },
  sameline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 2,
    paddingLeft: 20,
  },

  tocuh: {
    borderWidth: 1,
    padding: 16,
    width: 95,
    height: 55,
    marginTop: 25,
    // marginHorizontal: 35,
    // marginVertical: 25,
    borderRadius: 20,
    backgroundColor: '#24685b',
    textAlign: 'center',
    opacity: 100,
    paddingLeft: 20,
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
  },
  tocuh3: {
    borderWidth: 0.5,
    borderColor: 'black',
    padding: 25,
    width: 100,
    height: 95,
    borderRadius: 90,
    backgroundColor: '#24685b',
    opacity: 100,
    // marginTop:20
  },
  btt: {
    width: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: '#24685b',
  },
  footer: {
    width: 250,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    // borderTopLeftRadius: 20,
    //  borderBottomRightRadius: 50,
    backgroundColor: 'white',
    marginLeft: 30,
    fontWeight: 'bold',
  },
  footerbx: {
    width: 100,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: '#24685b',

    //  marginLeft:10
  },
  abc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 50,
    marginLeft: 50,
  },
});
