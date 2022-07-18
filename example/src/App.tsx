import * as React from 'react';

import { StyleSheet, View, Text, Image } from 'react-native';
import { AnimationController } from 'react-native-animation-controller';

export default function App() {

  return (
    <View style={styles.container}>
      <AnimationController
        direction={"down"}
        isFade={true}
        delay={200}
        duration={2000}
        hideBeforeAnimation={true}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </AnimationController>
      <AnimationController
        direction={"down"}
        isFade={true}
        delay={200}
        duration={2000}
        hideBeforeAnimation={true}>
        <Text style={styles.firstTitleStyle}>Animation Fade Down</Text>
      </AnimationController>
      <AnimationController
        direction={"left"}
        isFade={true}
        delay={200}
        duration={2000}
        hideBeforeAnimation={true}>
        <Text style={styles.firstTitleStyle}>Animation Fade Left</Text>
      </AnimationController>
      <AnimationController
        direction={"right"}
        isFade={true}
        delay={200}
        duration={2000}
        hideBeforeAnimation={true}>
        <Text style={styles.firstTitleStyle}>Animation Fade Right</Text>
      </AnimationController>
      <AnimationController
        direction={"up"}
        isFade={true}
        delay={200}
        duration={2000}
        hideBeforeAnimation={true}>
        <Text style={styles.firstTitleStyle}>Animation Fade Up</Text>
      </AnimationController>
    </View>
  );
}

const styles = StyleSheet.create({
  firstTitleStyle: {
    color: "blue",
    fontSize: 30,
    textAlign: "right",
    zIndex: 101,
    letterSpacing: -0.85
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  }
});
