import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
  Modal,
  View,
  ViewProps,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { THEME } from '../../assets/style/theme.style';
import { AppEventEmitter, AppEvents } from '../../helpers/eventEmitter';


export interface Props extends ViewProps {
  visible: boolean;
  name: string;
}
export const MyModal: React.FC<Props> = (props) => {
  const handlePress = () => {
    AppEventEmitter.emit(AppEvents.HideModal, props.name);
  };
  return (
    <Modal animationType="slide" transparent={true} visible={props.visible}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.8}
              onPress={handlePress}>
              <FontAwesomeIcon
                icon={faTimes}
                color={THEME.COLOR.white}
                size={THEME.FONT_SIZE.small}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.children}>{props.children}</View>
      </ScrollView>
    </Modal>
  );
};
const styles = StyleSheet.create({
  scrollContainer: {
    justifyContent: 'center',
    paddingHorizontal: 2*THEME.FONT_SIZE.small,
    flex:1,
  },
  container: {
    alignItems: 'center',
    padding: THEME.FONT_SIZE.small,
    height: THEME.FONT_SIZE.small,
    marginBottom:THEME.FONT_SIZE.small
    
  },
  button: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: THEME.COLOR.secondaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    width: '100%',
    alignItems: 'flex-end',
  },
  children: {
    padding: THEME.SPACE.small,
  },
});
