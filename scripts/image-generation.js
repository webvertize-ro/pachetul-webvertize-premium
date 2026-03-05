import sharp from 'sharp';
import path from 'path';

const images = [
  {
    input: './src/assets/images/img-slider/img1.avif',
    widths: [400, 800, 1200],
  },
  {
    input: './src/assets/images/img-slider/img2.avif',
    widths: [400, 800, 1200],
  },
  {
    input: './src/assets/images/img-slider/img3.avif',
    widths: [400, 800, 1200],
  },
  {
    input: './src/assets/images/img-slider/img4.avif',
    widths: [400, 800, 1200],
  },
  {
    input: './src/assets/images/img-slider/img5.avif',
    widths: [400, 800, 1200],
  },
];

images.forEach(({ input, widths }) => {
  widths.forEach((width) => {
    const ext = path.extname(input);
    const base = input.replace(ext, '');
    sharp(input)
      .resize(width)
      .toFormat('webp')
      .toFile(`${base}-${width}w.avif`);
  });
});
