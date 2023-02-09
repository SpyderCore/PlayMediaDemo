import { View } from "react-native";
import { getFileType, removeFileExtension } from "../../helpers/media";
import { Media } from "../../interfaces/media";
import { theme } from "../../theme/theme";
import { Field } from "../Field/Field";
import { Card } from "react-native-paper";

export const MediaItemCardDisplay = ({ item }: { item: Media }) => {
  return (
    <Card
      key={item.fileUrl}
      style={{
        marginBottom: theme.spacing.xs,
      }}
    >
      <Card.Cover
        style={{
          backgroundColor: theme.colors.black.lightest,
        }}
        source={{ uri: item.fileUrl }}
      />
      <Card.Content
        style={{
          backgroundColor: theme.colors.black.lightest,
          paddingBottom: 0,
          paddingRight: 0,
          paddingTop: 0,
        }}
      >
        <View style={{ position: "relative", width: "100%" }}>
          <Field title="Name" value={removeFileExtension(item.name)} />
          <Field title="Description" value={item.description} />
          <Field title="File type" value={getFileType(item)} />
          <Field
            title="Size"
            value={`${item.fileWidth} x ${item.fileHeight}`}
          />
        </View>
      </Card.Content>
    </Card>
  );
};