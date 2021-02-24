import { useState } from "react";

export interface UseBooleanActions {
  set: (value: boolean) => void;
  toggle: () => void;
  off: () => void;
  on: () => void;
}

export const useBoolean = (initial = false): [boolean, UseBooleanActions] => {
  const [value, setValue] = useState<boolean>(initial);
  const actions: UseBooleanActions = {
    set: (value) => setValue(Boolean(value)),
    toggle: () => setValue((value) => !value),
    on: () => setValue(true),
    off: () => setValue(false),
  };

  return [value, actions];
};
