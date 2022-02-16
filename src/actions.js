import axios from 'axios'

export const postMessage = (message) => {
    return async function (dispatch) {
      try {
        const json = await axios.post("api/order");
        return dispatch({
          type: "POST_MESSAGE",
          payload: json.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }