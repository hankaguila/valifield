export interface Field<T> extends Record<string, any> {
  value: T;
  error: string;
  disabled: boolean;
}

export function createField<T>(
  value: T,
  props?: Omit<Partial<Field<T>>, "value">
): Field<T> {
  return {
    value: value,
    error: props?.error ?? "",
    disabled: props?.disabled ?? false
  };
}
