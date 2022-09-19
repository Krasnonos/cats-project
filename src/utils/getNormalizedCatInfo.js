export const getNormalizedCatInfo = catInfo => {
  const name = catInfo.breeds[0].name;
  const description = catInfo.breeds[0].description;
  const temperament = catInfo.breeds[0].temperament;
  const origin = catInfo.breeds[0].origin;
  const weight = catInfo.breeds[0].weight.metric;
  const lifeSpan = catInfo.breeds[0].life_span;

  return { name, description, temperament, origin, weight, lifeSpan };
};
