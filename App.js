import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import names from "./names";

const namesAsObject = names.map((name) => {
  return {
    name: name,
  };
});

// ["Carl", "Bob", "Alice"] ==> [{ name: "Carl" }, { name: "Bob" }, { name: "Alice"} ]
// essentially what the map function in javascript does

export default function App() {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={namesAsObject}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  listItem: {
    padding: 20,
    margin: 10,
    backgroundColor: "lightblue",
    borderBottomColor: "#999",
    borderBottomwwidth: 1,
    shadowColor: "black",
    shadowRadius: 5,
    shadowOpacity: 0.2,
    shadowOffset: { x: 0, height: 3 },
  },
});
