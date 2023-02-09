import { useRef } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { HelperText } from "react-native-paper";
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
import { styles } from "../../theme/styles";
import { theme } from "../../theme/theme";
import { Icon } from "../Icon/Icon";
import generateJson from "./generateJson";

export const RichTextEditor = ({ showError, errorText, onChange }) => {
  const richText = useRef<any>();
  const richTextScroll = useRef<any>();

  const richTextHandle = (descriptionText) => {
    if (descriptionText) {
      onChange(generateJson(descriptionText));
    } else {
      onChange(null);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <RichToolbar
          editor={richText}
          actions={[
            actions.setBold,
            actions.setItalic,
            actions.setUnderline,
            actions.setStrikethrough,
            actions.insertBulletsList,
            actions.insertOrderedList,
            actions.insertLink,
            actions.code,
            actions.blockquote,
          ]}
          iconMap={{
            [actions.heading1]: ({ tintColor }) => (
              <Text style={[{ color: tintColor }]}>H1</Text>
            ),
          }}
          selectedIconTint={theme.colors.blue.light}
          iconTint={theme.colors.black.DEFAULT}
          style={{
            ...pageStyles.richTextToolbarStyle,
            borderTopLeftRadius: theme.spacing.xs,
            borderTopRightRadius: theme.spacing.xs,
          }}
        />
        <RichToolbar
          editor={richText}
          actions={[
            actions.heading1,
            actions.heading2,
            actions.heading3,
            actions.heading4,
            actions.heading5,
            actions.heading6,
            actions.line,
            actions.undo,
            actions.redo,
          ]}
          iconMap={{
            [actions.heading1]: ({ tintColor }) => (
              <Text style={[{ color: tintColor }]}>H1</Text>
            ),
            [actions.heading2]: ({ tintColor }) => (
              <Text style={[{ color: tintColor }]}>H2</Text>
            ),
            [actions.heading3]: ({ tintColor }) => (
              <Text style={[{ color: tintColor }]}>H3</Text>
            ),
            [actions.heading4]: ({ tintColor }) => (
              <Text style={[{ color: tintColor }]}>H4</Text>
            ),
            [actions.heading5]: ({ tintColor }) => (
              <Text style={[{ color: tintColor }]}>H5</Text>
            ),
            [actions.heading6]: ({ tintColor }) => (
              <Text style={[{ color: tintColor }]}>H6</Text>
            ),
          }}
          selectedIconTint={theme.colors.blue.light}
          iconTint={theme.colors.black.DEFAULT}
          style={{
            ...pageStyles.richTextToolbarStyle,
            borderColor: theme.colors.yellow.DEFAULT,
            borderWidth: 1,
          }}
        />
        <View style={pageStyles.scrollContainerStyle}>
          <ScrollView
            ref={richTextScroll}
            style={pageStyles.scrollContainerStyle}
          >
            <RichEditor
              editorStyle={{
                backgroundColor: theme.colors.white.DEFAULT,
                color: theme.colors.black.darkest,
              }}
              initialHeight={pageStyles.scrollContainerStyle.height}
              initialFocus={false}
              pasteAsPlainText={true}
              ref={richText}
              onChange={(descriptionText) => {
                richTextHandle(descriptionText);
              }}
              onCursorPosition={(offsetY) => {
                richTextScroll.current.scrollTo({
                  y: offsetY,
                  duration: 100,
                  animated: true,
                });
              }}
            />
          </ScrollView>
        </View>
        {showError && (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon
              name="warning-outline"
              color={theme.colors.pink.DEFAULT}
              size={16}
            />
            <HelperText type="error" visible>
              {errorText}
            </HelperText>
          </View>
        )}
      </View>
    </>
  );
};

const pageStyles = StyleSheet.create({
  richTextEditorStyle: {
    backgroundColor: theme.colors.white.DEFAULT,
    elevation: 4,
  },

  richTextToolbarStyle: {
    backgroundColor: theme.colors.yellow.DEFAULT,
    color: theme.colors.black.DEFAULT,
  },

  scrollContainerStyle: {
    height: 250,
    backgroundColor: theme.colors.white.DEFAULT,
  },
});