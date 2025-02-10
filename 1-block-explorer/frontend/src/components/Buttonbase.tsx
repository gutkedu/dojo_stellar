import { ReactNode } from "react";

type Props = {
  children: ReactNode; // Permite texto e outros elementos JSX
};

export function Buttonbase({ children }: Props) {
  return <button className="bg-sky-400">{children}</button>;
}
