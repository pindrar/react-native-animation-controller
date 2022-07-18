# react-native-animation-controller
RN Animation Controller
## Installation

```sh
npm install react-native-animation-controller
```

## Usage

```js
import { AnimationController } from 'react-native-animation-controller';

// ...

<AnimationController
    direction={"down"}
    isFade={true}
    delay={200}
    duration={2000}
    hideBeforeAnimation={true}>
        <Text>Animation Fade Down</Text>
</AnimationController>
<AnimationController
    direction={"left"}
    isFade={true}
    delay={200}
    duration={2000}
    hideBeforeAnimation={true}>
        <Text>Animation Fade Left</Text>
</AnimationController>
<AnimationController
    direction={"right"}
    isFade={true}
    delay={200}
    duration={2000}
    hideBeforeAnimation={true}>
        <Text>Animation Fade Right</Text>
</AnimationController>
<AnimationController
    direction={"up"}
    isFade={true}
    delay={200}
    duration={2000}
    hideBeforeAnimation={true}>
        <Text>Animation Fade Up</Text>
</AnimationController>
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
