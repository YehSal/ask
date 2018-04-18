import { createHandler } from 'redux-socket.io-connect';

export default createHandler({
  LOAD: (context, action) => {
    const { dispatch } = context;
    const { path } = action.payload;
    const payload = getDataFromPath(path);

    dispatch({
      type: 'DATA',
      payload
    });
  }
});
