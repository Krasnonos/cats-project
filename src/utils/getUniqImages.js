export const getUniqImages = images => {
  return images.reduce((acc, img, arr) => {
    const index = acc.infexOf(img);
    console.log(index);
    if (acc.includes(img)) {
      return acc;
    } else {
      return (acc = [...acc, img]);
    }
  }, []);
};
