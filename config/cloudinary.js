import { v2 as cloudinary } from 'cloudinary';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const CloudinaryStorage = require('multer-storage-cloudinary');

// 1. Setup Cloudinary Connection
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// 2. Configure Storage Settings
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'auction_players', // Folder name in Cloudinary
        allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
    }
});

export { cloudinary, storage };
