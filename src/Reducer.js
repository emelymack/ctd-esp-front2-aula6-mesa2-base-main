
export const mapStateToProps = (state) => {
  return{
    activeNotifications: state.active
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    saveSettings: (settings) => {
      dispatch({ type: "SAVE_NOTIFICATION_SETTINGS", settings })
    }
  }
}

export default function reducer(state, action) {
  if (typeof state === "undefined") {
    state = { n: false };
  }

  if (action.type === "SAVE_SETTINGS") {
    let n = action.n;
    return { ...state, n };
  } else {
    return state;
  }
}
