import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useHistory } from 'react-router-native';
import styles from './style';

const Example = () => {
  const history = useHistory();
  return (
        <View style={styles.container}>
            <TouchableOpacity onPress={ () => history.push('/')} style={styles.button}>
            <Text style={styles.backText}>back</Text>
            </TouchableOpacity>
        </View>
  );
};

export default Example;
