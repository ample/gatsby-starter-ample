export default input => {
  return {
    ...input,
    children: input.label,
    to: input.url
  }
}
