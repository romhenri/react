const Textarea = ({
  label,
  name,
  ...props
}) => {
  return (
    <label htmlFor={name}>
      {label}
      <textarea name={name} {...props}>
      </textarea>
    </label>
  )
}

export default Textarea;