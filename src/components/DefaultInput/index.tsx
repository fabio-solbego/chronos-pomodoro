type DefaltInputProps = {
  id: string;
} & React.ComponentProps<"input">;

export function DefaltInput({ id, type }: DefaltInputProps) {
  return (
    <>
      <label htmlFor={id}>task</label>
      <input id={id} type={type} />
    </>
  );
}
