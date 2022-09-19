export const addActionToHistory = (id, setActions, mutate) => {
  setActions(state => [
    ...state,
    {
      id,
      vote: 0,
      time: Date.now(),
    },
  ]);
  try {
    mutate(id);
  } catch (error) {
    console.log(error);
  }
};
