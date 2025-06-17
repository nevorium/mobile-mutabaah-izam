// src/utils/cloudinary.ts
import Constants from 'expo-constants';

export const uploadImageToCloudinary = async (imageUri: string) => {
  const data = new FormData();
  data.append('file', {
    uri: imageUri,
    type: 'image/jpeg',
    name: 'upload.jpg',
  } as any);
  data.append('upload_preset', Constants.expoConfig?.extra?.CLOUDINARY_UPLOAD_PRESET);

  const res = await fetch(`https://api.cloudinary.com/v1_1/${Constants.expoConfig?.extra?.CLOUDINARY_CLOUD_NAME}/image/upload`, {
    method: 'POST',
    body: data,
  });
  return res.json();
};
