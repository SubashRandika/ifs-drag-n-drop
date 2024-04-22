/**
 * The function generates a random light color in RGB format by ensuring the brightness of the color is
 * above a specified threshold.
 * @returns The function `generateRandomLightColor` returns a randomly generated light color in the
 * format of RGB values, ensuring that the color is light enough based on a brightness threshold of
 * 150. If the generated color is not light enough, it recursively retries to generate a new light
 * color until it meets the brightness threshold.
 */
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
