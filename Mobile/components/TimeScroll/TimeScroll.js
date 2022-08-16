import React, { useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { debounce, range } from 'lodash';

const BUTTON_HEIGHT = 50;
const VIEW_WIDTH = 250;

const getCenterPosition = (offsetY) => {
  return Math.round(offsetY / BUTTON_HEIGHT) * BUTTON_HEIGHT;
};
const getCenterPositionFromIndex = (index) => {
  return index * BUTTON_HEIGHT;
};
const fillEmpty = (visibleCount, values) => {
  const fillCount = (visibleCount - 1) / 2;
  for (let i = 0; i < fillCount; i++) {
    values.unshift('');
    values.push('');
  }
  return values;
};

const TimeScroll = ({ onHour, onMinute, myHour, myMinute }) => {
  return (
    <View style={styles.view}>
      <View style={styles.unit}>
        <Text style={styles.unitText}>시간</Text>
        <Text style={styles.unitText}>분</Text>
      </View>
      <TimePicker
        width={VIEW_WIDTH}
        buttonHeight={BUTTON_HEIGHT}
        visibleCount={3}
        onHour={onHour}
        onMinute={onMinute}
        myHour={myHour}
        myMinute={myMinute}
      />
    </View>
  );
};

const TimePicker = ({ width, buttonHeight, visibleCount, onHour, onMinute, myHour, myMinute }) => {
  const refs = React.useRef(Array.from({ length: 3 }).map(() => React.createRef()));

  useEffect(() => {
    refs.current[1].current.scrollTo({ y: myHour * 50 });
    refs.current[2].current.scrollTo({ y: myMinute * 5 });
  }, [myHour, myMinute]);

  const getOnScrollStop = (index) => (offsetY, label) => {
    const CENTER_POSITION = getCenterPosition(offsetY);
    refs.current[index].current.scrollTo({ y: CENTER_POSITION });
    if (index == 1) {
      onHour(CENTER_POSITION / 50);
    } else {
      onMinute(CENTER_POSITION / 5);
    }
  };

  const getScrollProps = (index) => {
    const onScrollStop = debounce(getOnScrollStop(index), 100, {
      leading: false,
      trailing: true,
    });
    return {
      showsVerticalScrollIndicator: false,
      contentContainerStyle: {
        left: 0,
        right: 0,
        position: 'absolute',
      },
      ref: refs.current[index],
      onScrollBeginDrag: () => {
        onScrollStop.cancel();
      },
      onScrollEndDrag: (e) => {
        onScrollStop.cancel();
        onScrollStop(e.nativeEvent.contentOffset.y, 'onScrollEndDrag');
      },
      onMomentumScrollBegin: () => {
        onScrollStop.cancel();
      },
      onMomentumScrollEnd: (e) => {
        onScrollStop.cancel();
        onScrollStop(e.nativeEvent.contentOffset.y, 'onMomentumScrollEnd');
      },
    };
  };

  const [scrollProps] = React.useState(() => {
    return Array.from({ length: 3 }).map((_, index) => getScrollProps(index));
  });

  const getOnPress = (scrollViewIdx, buttonIdx, item) => () => {
    const targetIdx = buttonIdx - 1;
    if (targetIdx < 0) return;
    const CENTER_POSITION = getCenterPositionFromIndex(targetIdx);
    scrollProps[scrollViewIdx].ref.current.scrollTo({ y: CENTER_POSITION });
    if (scrollViewIdx == 1) {
      onHour(item);
      console.log(item);
    } else {
      onMinute(item);
      console.log(item);
    }
  };

  return (
    <View style={[styles.container, { width, height: visibleCount * buttonHeight }]}>
      <OverlayView />
      <ScrollView {...scrollProps[1]}>
        {fillEmpty(visibleCount, range(0, 71)).map((item, index) => (
          <Button label={item} onPress={getOnPress(1, index, item)} dir="left" key={index} />
        ))}
      </ScrollView>
      <ScrollView {...scrollProps[2]}>
        {fillEmpty(visibleCount, range(0, 60, 10)).map((item, index) => (
          <Button label={item} onPress={getOnPress(2, index, item)} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

const Button = ({ label, onPress, dir }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.button, dir === 'left' ? styles.buttonLeft : null]}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const OverlayView = () => {
  return (
    <View pointerEvents={'none'} style={[StyleSheet.absoluteFill, styles.overlay]}>
      <View style={styles.overlayVisibleView}>
        <View style={styles.overlayVisibleViewInner} />
        <View style={styles.overlayVisibleViewInner} />
      </View>
    </View>
  );
};

export default TimeScroll;

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    padding: 8,
    marginBottom: 8,
  },
  unit: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    marginRight: 5,
  },
  unitText: {
    color: '#96989d',
  },
  container: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#92a3fd',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  button: {
    borderBottomWidth: 1,
    borderColor: '#92a3fd',
    height: BUTTON_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLeft: {
    borderRightWidth: 1,
    borderColor: '#92a3fd',
  },
  buttonLabel: {
    fontWeight: 'bold',
  },
  overlay: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayVisibleView: {
    width: '100%',
    height: BUTTON_HEIGHT,
    flexDirection: 'row',
  },
  overlayVisibleViewInner: {
    flex: 1,
    backgroundColor: 'rgba(99, 126, 255, 0.2)',
  },
});
