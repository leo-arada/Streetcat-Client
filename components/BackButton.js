import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const BackButton = ({ emptyComments }) => {
  return (
    <Ionicons
      name="md-arrow-back"
      size={30}
      onPress={emptyComments}
    />
  );
};

export default BackButton;
