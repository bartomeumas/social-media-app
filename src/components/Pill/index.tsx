import { useState } from "react";

import { Button } from "../Button";

interface Pill {
  text: string;
  pillClassName?: string;
  onClick?: () => {};
}

export const Pill = ({ text, pillClassName, onClick }: Pill) => {
  return (
    <Button buttonClassName={pillClassName} text={text} onClick={onClick} />
  );
};
