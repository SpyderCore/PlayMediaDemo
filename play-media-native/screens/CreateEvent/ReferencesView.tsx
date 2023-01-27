import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { StackNavigationProp } from "../../interfaces/navigators";
import { styles } from "../../theme/styles";

export const ReferencesView = () => {
  const navigation = useNavigation<StackNavigationProp>();

  const onAddMedia = useCallback(() => {
    navigation.navigate("AddMedia");
  }, []);

  return (
    <View style={{ width: "100%", justifyContent: "flex-end" }}>
      <Button
        icon="plus"
        mode="contained"
        onPress={onAddMedia}
        style={styles.button}
        labelStyle={styles.buttonLabel}
      >
        Media
      </Button>
    </View>
  );
};