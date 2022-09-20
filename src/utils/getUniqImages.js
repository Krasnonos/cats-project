export const getUniqImages = images => {
  let uniqImages = images.reduce(
    (acc, image) => {
      if (acc.map[image.id])
        // если данный город уже был
        return acc; // ничего не делаем, возвращаем уже собранное

      acc.map[image.id] = true; // помечаем город, как обработанный
      acc.uniqImages.push(image); // добавляем объект в массив городов
      return acc; // возвращаем собранное
    },
    {
      map: {}, // здесь будут отмечаться обработанные города
      uniqImages: [], // здесь конечный массив уникальных городов
    }
  ).uniqImages; // получаем конечный массив

  console.log(uniqImages);
  return uniqImages;
};
