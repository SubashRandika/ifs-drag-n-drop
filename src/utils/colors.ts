export const generateRandomLightColor = (): string => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  // ensure the color is light enough which is above a certain brightness threshold
  const brightnessThreshold = 150;
  const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
  if (brightness < brightnessThreshold) {
    // retry if color is not light enough
    return generateRandomLightColor();
  }

  return `rgb(${red}, ${green}, ${blue})`;
};
