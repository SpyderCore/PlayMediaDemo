import { useCallback, useState } from "react";
import { StatusBar } from "react-native";
import { theme } from "../theme/theme";
import { useQuery } from "react-query";
import { getAllMedia } from "../api/queries/getMedia";
import { Listing } from "../components/Listing/Listing";
import { SelectableImage } from "../components/SelectableImage/SelectableImage";
import { Media } from "../interfaces/media";

const fullWidthStyle = {
  borderRadius: 5,
  height: 200,
  width: "100%",
  marginVertical: theme.spacing.xxs,
};

export const AddCH1MediaScreen = () => {
  const { data: media, isFetching } = useQuery("media", getAllMedia);
  const [selectedMedia, setSelectedMedia] = useState<Media[]>([]);

  const onSelect = useCallback((image: Media) => {
    setSelectedMedia((prevSelectedMedia) => {
      if (prevSelectedMedia.includes(image)) {
        return prevSelectedMedia.filter((item) => item !== image);
      }

      return [...prevSelectedMedia, image];
    });
  }, []);

  console.log("media", media);
  console.log("selectedMedia", selectedMedia);

  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <Listing
        data={media}
        isLoading={isFetching}
        renderItem={({ item, index }) => (
          <SelectableImage
            key={item.id}
            onSelect={() => onSelect(item)}
            selected={false}
            uri={item.fileUrl}
            style={fullWidthStyle}
          />
        )}
      />
    </>
  );
};