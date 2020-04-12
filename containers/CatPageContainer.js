import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CatpageScreen from '../screens/CatPageScreen';
import { 
  modifyAcat, 
  updateAcatForLike, 
  deleteAcat, 
  updateCatsComment, 
  getComments, 
  addAcomment, 
  deleteAcomment,
} from '../actions';
import { SERVER_API } from 'react-native-dotenv';
import { AsyncStorage } from "react-native";
import likePostRequest from '../utils/likePostRequest';
import getRequestWithToken from '../utils/getRequestWithToken';
import createOptionalAlert from '../utils/createOptionalAlert';
import { DELETE_ALERT } from '../constants'

const CatPageContainer = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { location } = useSelector((state) => state.user);
  const { comments } = useSelector((state) => state.comment);
  const { index } = route.params;
  const { user } = useSelector((state) => state);
  
  const cat = useSelector((state) => {
    if (index.length > 10) {
      const { catLists } = state.cat;
      return catLists.find((cat) => cat._id === index);
    }

    return state.cat.catsAround[index];
  });
  const [isFounder, setIsFounder] = useState(false);

  const getRequestForComments = async (id) => {
    const { result, comments } = await getRequestWithToken(
      `${SERVER_API}/cat/${id}/comment`
    );
    dispatch(getComments(comments));
  };

  const postRequesAddComment = async (input) => {
    const token = await AsyncStorage.getItem('token');
    const { _id } = cat;
    const response = await fetch(`${SERVER_API}/cat/${cat._id}/comment`, {
      method: 'POST',
      body: JSON.stringify({ 
        id: _id, 
        writerId: user.mongoId, 
        content: input, 
        writerName: user.name 
      }),
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },  
    });

    const { result, comment } = await response.json();
    dispatch(addAcomment(comment));
  };

  useEffect(() => {
    if (cat) {
      getRequestForComments(cat._id);
      setIsFounder(user.mongoId === cat.founder);
    }
  }, [cat]);

  const snedModifiedData = async (updatedata, catId) => {
    const token = await AsyncStorage.getItem('token');
    const response = await fetch(`${SERVER_API}/cat/${catId}`, {
      method: 'PUT',
      body: JSON.stringify(updatedata),
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },  
    });

    const res = await response.json();
    dispatch(modifyAcat(res.cat));
    navigation.goBack();
  };

  const sendLikePostRequest = async (catId) => {
    const { cat, message } = await likePostRequest(catId);
    if (message === 'User already liked it') {
      return;
    }

    dispatch(updateAcatForLike(cat));
  };

  const sendDeleteRequest = async () => {
    const helper = async () => {
      const { _id, founder } = cat;
      const token = await AsyncStorage.getItem('token');
      const response = await fetch(`${SERVER_API}/cat/${_id}`, {
        method: 'DELETE',
        body: JSON.stringify({ _id, founder }),
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },  
      });
      const res = await response.json();
      if (res.result === 'ok') {
        dispatch(deleteAcat(res.cat));
        navigation.navigate('Home');
      } else {
        console.log('error')
      }
    };
    
    createOptionalAlert(DELETE_ALERT.option1, DELETE_ALERT.option2, helper);
  };

  const sendDeleteRequestForComment = (commentId) => {
    const helper = async () => {
      const { _id } = cat;
      const token = await AsyncStorage.getItem('token');
      const response = await fetch(`${SERVER_API}/cat/${_id}/comment/${commentId}`, {
        method: 'DELETE',
        body: JSON.stringify({ catId: _id, commentId }),
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },  
      });
      const { newCat, comment } = await response.json();
      dispatch(updateCatsComment(newCat));
      dispatch(deleteAcomment(comment));
    };

    createOptionalAlert(DELETE_ALERT.option1, DELETE_ALERT.option2, helper);
  };

  if (cat) {
    return (
      <CatpageScreen 
        cat={cat} 
        navigation={navigation} 
        isFounder={isFounder}
        snedModifiedData={snedModifiedData}
        sendLikePostRequest={sendLikePostRequest}
        sendDeleteRequest={sendDeleteRequest}
        userId={user.mongoId}
        comments={comments}
        postRequesAddComment={postRequesAddComment}
        deleteComment={sendDeleteRequestForComment}
      />
    ); 
  }

  return null;
};

export default CatPageContainer;
