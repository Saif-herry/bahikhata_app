import { Dispatch, ReactNode, SetStateAction } from "react";

export type NullableProps<T> = { [k in keyof T]?: T[k] };
export type PaginationProps<T> = {
  take: number;
  skip: number;
  search: string;
  sort: string;
} & T;
export type OptionType = {
  value: string | number;
  label?: string | number;
  icon?: ReactNode;
};
export type ReactDispatch<T> = Dispatch<SetStateAction<T>>;
