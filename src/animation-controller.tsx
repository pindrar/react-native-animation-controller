import React from 'react';
import { Animated, View, Dimensions } from 'react-native';

class Constants {
    static DIRECTION_LEFT = "left"
    static DIRECTION_RIGHT = "right"
    static DIRECTION_UP = "up"
    static DIRECTION_DOWN = "down"
}

interface AnimationControllerProps {
    direction: "left" | "right" | "up" | "down"
    isFade: boolean
    delay: number
    duration: number
    children?: any
    offset?: number
    hideBeforeAnimation?: boolean
}


export class AnimationController extends React.Component<AnimationControllerProps, {}> {
    state = {
        animation: new Animated.ValueXY(),
        fadeValue: new Animated.Value(0)
    };

    _x!: number;
    _y!: number;

    startAnimation = () => {
        const { width, height } = Dimensions.get("window");
        const delay = this.props.delay
        const duration = this.props.duration
        const direction = this.props.direction
        const hideBeforeAnimation = this.props.hideBeforeAnimation
        const isFade = this.props.isFade || hideBeforeAnimation
        const fadeAnimation = Animated.timing(this.state.fadeValue, {
            toValue: 1,
            duration: hideBeforeAnimation ? 0 : duration,
            delay,
            useNativeDriver: true
        })

        if (direction === Constants.DIRECTION_RIGHT || direction === Constants.DIRECTION_LEFT) {
            this.getHorizontalAnimation(direction, isFade, delay, duration, width, fadeAnimation);
        } else if (direction === Constants.DIRECTION_UP || direction === Constants.DIRECTION_DOWN) {
            this.getVerticalAnimation(direction, isFade, delay, duration, height, fadeAnimation);
        }
    };

    getHorizontalAnimation = (direction: string, isFade: boolean | undefined, delay: number, duration: number, width: number, fadeAnimation: Animated.CompositeAnimation) => {
        const translateTo = this.props.offset ? this.props.offset : width
        const toValue = direction === Constants.DIRECTION_RIGHT ? translateTo - this._x : -translateTo - this._x
        const horizontalAnimation = Animated.timing(this.state.animation.x, {
            toValue,
            duration,
            delay,
            useNativeDriver: true
        })
        if (isFade) {
            Animated.parallel([
                horizontalAnimation,
                fadeAnimation
            ]).start()
        } else {
            horizontalAnimation.start()
        }
    }

    getVerticalAnimation = (direction: string, isFade: boolean | undefined, delay: number, duration: number, height: number, fadeAnimation: Animated.CompositeAnimation) => {
        const translateTo = this.props.offset ? this.props.offset : height
        const toValue = direction === Constants.DIRECTION_UP ? -translateTo + this._y : translateTo - this._y
        const verticalAnimation = Animated.timing(this.state.animation.y, {
            toValue,
            duration,
            delay,
            useNativeDriver: true
        })
        if (isFade) {
            Animated.parallel([
                verticalAnimation,
                fadeAnimation
            ]).start()
        } else {
            verticalAnimation.start()
        }
    }

    saveDimensions = (e: { nativeEvent: { layout: { x: number; y: number; }; }; }) => {
        this._x = e.nativeEvent.layout.x
        this._y = e.nativeEvent.layout.y
        this.startAnimation()
    };

    render() {
        const animatedStyles = this.props.isFade || this.props.hideBeforeAnimation ? {
            transform: this.state.animation.getTranslateTransform(),
            opacity: this.state.fadeValue
        } : {
            transform: this.state.animation.getTranslateTransform()
        }
        const { width, height } = Dimensions.get("window");
        let transform
        const direction = this.props.direction

        if (direction === Constants.DIRECTION_RIGHT || direction === Constants.DIRECTION_LEFT) {
            const translateXVal = this.props.offset ? this.props.offset : width
            transform = direction === Constants.DIRECTION_RIGHT ? [{ translateX: -translateXVal }] : [{ translateX: translateXVal }]
        } else if (direction === Constants.DIRECTION_UP || direction === Constants.DIRECTION_DOWN) {
            const translateYVal = this.props.offset ? this.props.offset : height
            transform = direction === Constants.DIRECTION_UP ? [{ translateY: translateYVal }] : [{ translateY: -translateYVal }]
        }

        return (
            <Animated.View style={animatedStyles}>
                <View onLayout={this.saveDimensions} style={{
                    transform
                }}>
                    {this.props.children}
                </View>
            </Animated.View>
        );
    }
}
