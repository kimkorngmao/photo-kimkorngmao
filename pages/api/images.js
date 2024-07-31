import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  const imagesDirectory = path.join(process.cwd(), 'public/images');
  const filenames = fs.readdirSync(imagesDirectory);

  const images = await Promise.all(filenames.map(async (filename, index) => {
    const imagePath = path.join(imagesDirectory, filename);
    const image = sharp(imagePath);
    const metadata = await image.metadata();
    
    const height = 2000;
    const width = Math.round((metadata.width / metadata.height) * height);
    
    const id = filename.replace(/\.[^/.]+$/, '');
    const src = `/images/${filename}`;
    const name = filename.replace(/^\d+_/, '').replace(/-/g, ' ').replace(/\.[^/.]+$/, '');

    const prev = index > 0 ? `/${filenames[index - 1].replace(/\.[^/.]+$/, '')}` : "";
    const next = index < filenames.length - 1 ? `/${filenames[index + 1].replace(/\.[^/.]+$/, '')}` : "";

    return {
      id,
      src,
      name,
      width,
      height,
      prev,
      next
    };
  }));

  res.status(200).json(images);
}