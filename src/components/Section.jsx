const Section = ({
  children,
  className = '',
  paddingMinimum = false,
  ...props
}) => {
  return (
    <section 
      className={
        className + " " +
        (paddingMinimum ? "min-padding" : "")
      }
      {
        ...props
      }>
      {children}
    </section>
  ) 
}

export default Section;