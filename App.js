import React, { useRef, useState } from "react";
import { Video } from "expo-av";
import { StyleSheet, Text, View, Button } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  const orientation = useDeviceOrientation();

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "teal",
          width: "100%",
          paddingVertical: 30,
          position: "absolute",
          top: 0,
        }}
      ></View>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={styles.vidDetails}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "#fff",
            marginLeft: 25,
          }}
        >
          Big Buck Bunny
        </Text>
        <View
          style={{
            flexDirection: "row",
            width: "30%",
            justifyContent: "space-around",
          }}
        >
          <Button
            title={status.isPlaying ? "Pause" : "Play"}
            onPress={() =>
              status.isPlaying
                ? video.current.pauseAsync()
                : video.current.playAsync()
            }
          />
          <Button
            title={status.isLooping ? "Stop loop" : "Set loop"}
            onPress={() => video.current.setIsLoopingAsync(!status.isLooping)}
          ></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "cornflowerblue",
  },

  video: {
    width: 640,
    height: 360,
  },

  vidDetails: {
    width: 640,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "teal",
  },
});
