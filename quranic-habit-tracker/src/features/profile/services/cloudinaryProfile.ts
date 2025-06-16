// src/features/profile/services/cloudinaryProfile.ts
import { uploadImageToCloudinary } from '../../../utils/cloudinary';

export const uploadProfileImage = async (imageUri: string) => {
  return await uploadImageToCloudinary(imageUri);
};
