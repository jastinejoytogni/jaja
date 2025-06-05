import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Card, Text } from "@rneui/themed";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ciclCases } from "../test-data/ciclCase";
import { pendingTasks } from "../test-data/pendingTask";
import { recentActivities } from "../test-data/recentActivity";
import { RootStackParamList } from "../types/navigation";
import { carProfiles } from "../test-data/carProfile";

const DashboardScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Center Card Tiles */}
        <View style={styles.centerTiles}>
          <View style={styles.row}>
            <Card containerStyle={[styles.tileCard, { width: 340 }]}>
              <Card.Title>Active CAR Cases</Card.Title>
              <Card.Divider />
              <Text style={styles.cardText}>{carProfiles.length}</Text>
              <Text
                style={{ fontSize: 14, color: "#888", textAlign: "center" }}
              >
                Children currently at risk
              </Text>
            </Card>
            <Card containerStyle={[styles.tileCard, { width: 340 }]}>
              <TouchableOpacity
                onPress={() => navigation.navigate("CICLManagement")}
              >
                <Card.Title>Active CICL Cases</Card.Title>
              </TouchableOpacity>
              <Card.Divider />
              <Text style={styles.cardText}>{ciclCases.length}</Text>
              <Text
                style={{ fontSize: 14, color: "#888", textAlign: "center" }}
              >
                Children in conflict with the law
              </Text>
            </Card>
          </View>
          <View style={styles.row}>
            <Card containerStyle={[styles.tileCard, { width: 340 }]}>
              <Card.Title>Rehabilitation Programs</Card.Title>
              <Card.Divider />
              <Text style={styles.cardText}>42</Text>
              <Text
                style={{ fontSize: 14, color: "#888", textAlign: "center" }}
              >
                Childrens enrolled
              </Text>
            </Card>
          </View>
        </View>

        {/* Side Columns */}
        <View style={styles.sideColumns}>
          <Card containerStyle={styles.sideCard}>
            {/* TODO: Limit and scrollable */}
            <Card.Title style={styles.cardTitleBlue}>Pending Tasks</Card.Title>
            <Card.Divider />
            {pendingTasks.map((task, idx) => (
              <View key={idx} style={styles.taskRow}>
                <Text style={styles.taskTitle}>{task.title}</Text>
                <View style={[styles.tag, { backgroundColor: task.tagColor }]}>
                  <Text style={styles.tagText}>{task.due}</Text>
                </View>
              </View>
            ))}
          </Card>
          <Card containerStyle={styles.sideCard}>
            {/* TODO: Limit and scrollable */}
            <Card.Title style={styles.cardTitleBlue}>
              Recent Activities
            </Card.Title>
            <Card.Divider />
            {recentActivities.map((activity, idx) => (
              <View key={idx} style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 15 }}>{activity.description}</Text>
                <Text style={{ fontSize: 12, color: "#888" }}>
                  {activity.time}
                </Text>
              </View>
            ))}
          </Card>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f6fa" },
  navBar: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    marginBottom: 8,
    justifyContent: "space-between",
  },
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },
  menuItem: {
    marginLeft: 24,
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
  },
  mainContent: {
    flex: 1,
    flexDirection: "row",
    padding: 24,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  centerTiles: {
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
  },
  tileCard: {
    width: 160,
    marginHorizontal: 12,
    alignItems: "center",
  },
  cardText: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
  },
  sideColumns: {
    flex: 1,
    justifyContent: "flex-start",
    marginLeft: 32,
  },
  sideCard: {
    marginBottom: 24,
    minWidth: 220,
  },
  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
    paddingVertical: 4,
  },
  taskTitle: {
    flex: 1,
    fontSize: 15,
    color: "#333",
  },
  tag: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginLeft: 8,
    minWidth: 60,
    alignItems: "center",
  },
  tagText: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 13,
  },
  cardTitleBlue: {
    color: "#1976d2",
    backgroundColor: "#e3f0fd",
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
});

export default DashboardScreen;
