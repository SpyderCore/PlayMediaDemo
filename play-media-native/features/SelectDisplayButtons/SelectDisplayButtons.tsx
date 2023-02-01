import { View } from "react-native";
import { theme } from "../../theme/theme";
import { IconButton } from "react-native-paper";
import { useCallback } from "react";

export enum ListingImageDisplayType {
  GRID = "grid",
  LIST = "list",
  CARDS = "cards",
}

const buttonStyle = {
  borderRadius: 3,
  marginHorizontal: theme.spacing.xxs,
  height: 40,
  width: 40,
};

export const SelectDisplayButtons = ({
  displayType,
  onDisplayTypeChange,
}: {
  displayType: string;
  onDisplayTypeChange?: (value: string) => void;
}) => {
  const onSelect = useCallback(
    (value: string) => {
      if (onDisplayTypeChange) {
        onDisplayTypeChange(value);
      }
    },
    [onDisplayTypeChange]
  );

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        marginLeft: theme.spacing.xxs,
      }}
    >
      <IconButton
        mode="contained"
        icon="view-list"
        iconColor={
          displayType === ListingImageDisplayType.LIST
            ? theme.colors.yellow.DEFAULT
            : theme.colors.gray.light
        }
        containerColor="transparent"
        size={35}
        style={buttonStyle}
        theme={{ roundness: 1 }}
        onPress={() => {
          onSelect(ListingImageDisplayType.LIST);
        }}
      />
      <IconButton
        mode="contained"
        icon="view-grid"
        iconColor={
          displayType === ListingImageDisplayType.GRID
            ? theme.colors.yellow.DEFAULT
            : theme.colors.gray.light
        }
        containerColor="transparent"
        size={35}
        style={buttonStyle}
        theme={{ roundness: 1 }}
        onPress={() => {
          onSelect(ListingImageDisplayType.GRID);
        }}
      />
      <IconButton
        mode="contained"
        icon="cards"
        iconColor={
          displayType === ListingImageDisplayType.CARDS
            ? theme.colors.yellow.DEFAULT
            : theme.colors.gray.light
        }
        containerColor="transparent"
        size={35}
        style={buttonStyle}
        theme={{ roundness: 1 }}
        onPress={() => {
          onSelect(ListingImageDisplayType.CARDS);
        }}
      />
    </View>
  );
};