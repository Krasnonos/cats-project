export const addActionToHistory = (id, setActions) => {
  setActions(state => [
    ...state,
    {
      id,
      vote: 0,
      time: Date.now(),
    },
  ]);
};
