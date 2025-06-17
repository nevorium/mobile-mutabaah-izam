import React from 'react';
import { Animated, Easing } from 'react-native';

export default function FadeInView({ children, style, duration = 500 }) {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, duration]);

  return (
    <Animated.View style={[style, { opacity: fadeAnim }]}> 
      {children}
    </Animated.View>
  );
}
