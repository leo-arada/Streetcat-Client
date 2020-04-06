import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { CheckBox } from "native-base";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Input from '../components/Input';
import { RNS3 } from 'react-native-aws3';

const CatScreen = () => {
  const [name, setName] = useState('');
  const [accessibility, setAccessibility] = useState({ answer: '' });
  const [friendliness, setFriendliness] = useState({ answer: ''});
  const [description, setDescription] = useState('');

  const getPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      alert('We need to get your permision to uplode photos!')
    }
  };

  useEffect(() => {
    getPermission();
  }, []);

  const handleNameInput = (name) => {
    setName(name.replace(/[1-9|$&+,:;=?@#|'<>.^*()%!-]/g, ''));
  };

  const validateInput = () => {
    if(/^(?:[^\n]{0,20}\n?){0,3}$/g.test(t) !== true){
      alert('input is invalid');
      }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      aspect: [4, 3],
      quality: 1,
    })
    console.log(result);
    const file = {
      uri: result.uri,
      name: '12312313',
      type: 'image/png'
    }
    console.log(file);
  };
  
  const checkValue = ['상', '중', '하'];

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <Text style={styles.header}>냥이 이름</Text>
          <Input 
            style={styles.input} 
            maxLength={10}
            onChangeText={handleNameInput}
            value={name}
          />
          <Text style={styles.header}>접근난이도</Text>
          <View style={styles.checkBoxContainer}>
            {checkValue.map((value, i) => {
              return (
                <>
                  <CheckBox
                    key={i}
                    color="#fc5185"
                    onPress={() => setAccessibility({ answer: value })}
                    checked={accessibility.answer===value}
                  />
                  <Text style={styles.checkBoxText}>{value}</Text>
                </>    
              )
            })}
          </View >
          <Text style={styles.header}>친화력</Text>
          <View style={styles.checkBoxContainer}>
            {checkValue.map((value, i) => {
              return (
                <>
                  <CheckBox
                    key={i} 
                    color="#fc5185"
                    onPress={() => setFriendliness({ answer: value })}
                    checked={friendliness.answer===value}
                  />
                  <Text style={styles.checkBoxText}>{value}</Text>
                </>    
              )
            })}
          </View >
          <Text style={styles.header}>특이사항</Text>
          <View style={styles.textAreaContainer} >
            <TextInput
              style={styles.textArea}
              underlineColorAndroid="transparent"
              placeholder="참고할 사항을 적어주세요"
              placeholderTextColor="grey"
              multiline={true}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button 
              title="사진업로드"
              onPress={pickImage}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    elevation: 10,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
  },
  input: {
    width: 200,
    fontSize: 15,
  },
  header: {
    fontSize:20,
    fontWeight:"bold",
    color:"#364f6b",
    marginBottom:10
  },
  checkBoxContainer: {
    width:"80%",
    backgroundColor:"#fff",
    borderRadius:20,
    padding:10,
    marginBottom:10,
    flexDirection:"row",
  },
  checkBoxText: {
    marginLeft: 20,
  },
  textAreaContainer: {
    width: '80%',
    borderColor: 'grey',
    borderWidth: 1,
    padding: 5,
    maxHeight: 100 
  },
  textArea: {
    maxHeight: 55,
    fontSize: 15,
    justifyContent: "flex-start"
  }
});

export default CatScreen;
