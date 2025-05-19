import styles from "./styles.module.css";

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
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}
