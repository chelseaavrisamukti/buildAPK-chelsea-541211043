import React from 'react';
import{View,Text, Image, Button,Linking, TextInput, ScrollView} from 'react-native';

const ContactMe = () => {
  const url = 'https://www.instagram.com/chlsavrsa/';
  Linking.openURL(url);
}
const Project = () => {
  const url = 'https://dribbble.com/ChelseaAvrisa20_cm';
  Linking.openURL(url);
}

const Latihan = () => {
  return (
    <ScrollView>
    <View style={{backgroundColor:'lightblue', flex:1}}>
    <View style={{alignItems:'center', padding:30}}>
        <Image style={{width:190, height:190,borderRadius:20}} source={require('./assets/image.jpeg')}/>
    </View>
      <Text style={{fontWeight:'bold',fontSize:30, textAlign:'center', color:'black'}}>Chelsea Avrisa M</Text>
      <Text style={{fontSize:15, padding:10, textAlign:'center', color:'black'}}>Saya seorang siswi di SMK Telkom Purwoketo jurusan
Rekaya Perangkat lunak. Memiliki ketertarikan dalam
bidang design. Saya suka mencoba hal hal baru, dan
senang bekerja dengan tim.</Text>
  <View style={{alignItems:'center', padding:20}}>
      <Button title='Contact Me' color='#B3A492' onPress={ContactMe} />
  </View>
  <Text style={{fontWeight:'bold', fontSize:20, textAlign:'center', color:'black'}}>My Recent Project</Text>
   <View style={{alignItems:'center', padding:10}}>
        <Image style={{width:280, height:180,borderRadius:20}} source={require('./assets/foto.jpg')}/>
    </View>
   <View style={{alignItems:'center', padding:10}}>
        <Image style={{width:280, height:180,borderRadius:20}} source={require('./assets/fotoooo.png')}/>
              <View style={{alignItems:'center', padding:20}}>
      <Button title='Project' color='#B3A492' onPress={Project} />
  </View>
        
    </View>
        
        
 
    </View>
    </ScrollView>
  );
}
export default Latihan