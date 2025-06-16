import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { uploadImageToCloudinary } from '../../../utils/cloudinary';
import { useTheme } from '../../../theme';

export default function ImagePickerInput({ value, onChange }) {
  const { colors } = useTheme();
  const [uploading, setUploading] = useState(false);
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, quality: 0.7 });
    if (!result.canceled && result.assets.length > 0) {
      setUploading(true);
      const upload = await uploadImageToCloudinary(result.assets[0].uri);
      onChange(upload.secure_url);
      setUploading(false);
    }
  };
  return (
    <View style={styles.container}>
      {value ? (
        <Image source={{ uri: value }} style={styles.image} />
      ) : (
        <TouchableOpacity onPress={pickImage} style={styles.button}>
          <ActivityIndicator animating={uploading} color={colors.greenGradient[0]} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 12,
  },
  button: {
    width: 120,
    height: 120,
    borderRadius: 12,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
