export default input => {
  return {
    ...input,
    children: input.children || input.label,
    to: input.to || input.url
  }
}
