export type PropsWithClassName<T = unknown> = T & {
  className?: string;
};

export type RecordEntries<T extends object> = [keyof T, T[keyof T]][];
