import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useHistory } from 'react-router-native';
import styles from './style';

const data = [
  { title: 'Example', route: '/example' },
];
const Home = () => {
  const history = useHistory();
  return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item, index) => item.title + index}
                renderItem={({ item }) => (
                    <>
                        <TouchableOpacity
                            onPress={() =>
                              history.push(item.route)
                            }
                            style={styles.item}
                        >
                            <Text style={styles.title}>{item.title}</Text>
                        </TouchableOpacity>
                        <View style={styles.line} />
                    </>
                )} />
        </View>
  );
};

export default Home;
