import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { CheckBox } from "native-base";
import Input from '../components/Input';
import  { checkboxValues } from '../constants'
import handleInput from '../utils/handleInput';
const CatRegisterScreen = ({ sendDataToServer, photo, displyPhoto, location }) => {
  const [name, setName] = useState('');
  const [accessibility, setAccessibility] = useState({ answer: '' });
  const [friendliness, setFriendliness] = useState({ answer: ''});
  const [description, setDescription] = useState('');
  
  const submitHandler = async () => {
    if(!name) alert('이름을 꼭 입력해 주세요!');
    if (!accessibility.answer) return alert('접근 난이도를 골라 주세요!');
    if (!friendliness.answer) return alert('친화력을 골라 주세요!');
    if (!photo.uri) return alert('고양이 사진을 등록해주세요');
   
    const data = {
      name,
      accessibility: accessibility.answer,
      friendliness: friendliness.answer,
      description,
      location: [location.latitude, location.longitude],
    }
   
    sendDataToServer(data, photo);
  };

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <>
        <View style={styles.screen}>
          <View style={styles.inputContainer}>
            <Text style={styles.header}>냥이 이름</Text>
            <Input 
              style={styles.nameInput} 
              maxLength={10}
              onChangeText={(e) => handleInput(e, setName)}
              value={name}
            />
            <Text style={styles.header}>접근난이도</Text>
            <View style={styles.checkBoxContainer}>
              {checkboxValues.map((value, i) => {
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
                );
              })}
            </View >
            <Text style={styles.header}>친화력</Text>
            <View style={styles.checkBoxContainer}>
              {checkboxValues.map((value, i) => {
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
                );
              })}
            </View >
            <Text style={styles.header}>특이사항</Text>
            <Input 
              style={styles.descriptionInput} 
              maxLength={25}
              onChangeText={(e) => handleInput(e, setDescription)}
              value={description}
            />
            <View style={styles.buttonContainer}>
              <Button 
                title="사진업로드"
                onPress={displyPhoto}
              />
            </View>
            {photo.uri && 
              <Image 
                source={{ uri: photo.uri }}
                style={styles.imageBox}
              />
            }
          </View>
        </View>
        <Button
          title="냥이등록"
          style={styles.submit} 
          onPress={submitHandler}
        />
      </> 
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
    width: 350,
    maxWidth: '95%',
    alignItems: 'center',
    elevation: 10,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
  },
  nameInput: {
    width: 150,
    fontSize: 15,
  },
  descriptionInput: {
    width: 300,
    fontSize: 15,
  },
  header: {
    fontSize:20,
    fontWeight:"bold",
    color:"#364f6b",
    marginBottom:10,
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
    marginLeft: 38,
  },
  imageBox: {
    width: 150,
    height: 150,
  }
});

export default CatRegisterScreen;
