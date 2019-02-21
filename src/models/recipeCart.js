export default {
    namespace: 'recipeCart',
    state: [],
    reducers: {
      'delete'(state, { payload: id }) {
        return state.filter(item => item.id !== id);
      },
      'change'(state, { payload: {id, value} }) {
        return state.map(item => item.id!=id?item:{
            ...item,
            count: value
        });
      },
    },
  };