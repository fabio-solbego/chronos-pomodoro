type DefaltInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<"input">;

export function DefaltInput({
  id,
  type,
  labelText,
  ...rest
}: DefaltInputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input id={id} type={type} {...rest} />
    </>
  );
}
