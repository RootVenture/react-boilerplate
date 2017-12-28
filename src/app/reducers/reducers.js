// @flow

type State = number;
type Action = {
  type: string
};

const counter = (state: State = 1, action: Action) => {
  switch (action.type) {
    case "INCREMENT": {
      return state + 2;
    }
    default:
      return state;
  }
};

export default { counter };
