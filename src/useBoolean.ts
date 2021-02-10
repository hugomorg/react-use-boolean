import { useReducer } from "react";

enum Types {
  SET,
  TOGGLE,
  ON,
  OFF,
}

interface Action {
  value?: boolean;
  type: Types;
}

type Reducer = (state: boolean, action: Action) => boolean;

interface Actions {
  set: (value: boolean) => void;
  toggle: () => void;
  off: () => void;
  on: () => void;
}

const reducer = (state: boolean, action: Action) => {
  if (action.type === Types.SET) {
    return action.value;
  }
  if (action.type === Types.TOGGLE) {
    return !state;
  }
  if (action.type === Types.OFF) {
    return false;
  }
  if (action.type === Types.ON) {
    return true;
  }
  return state;
};

export const useBoolean = (initial = false): [boolean, Actions] => {
  const [state, dispatch] = useReducer<Reducer>(reducer, initial);
  const actions: Actions = {
    set: (value: boolean) => dispatch({ type: Types.SET, value }),
    toggle: () => dispatch({ type: Types.TOGGLE }),
    on: () => dispatch({ type: Types.ON }),
    off: () => dispatch({ type: Types.OFF }),
  };

  return [state, actions];
};
