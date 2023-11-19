import { ReactNode } from "react";

export type TProps = {
  children: ReactNode;
};

export interface ITask {
  id: string;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
  state: number;
}
