export default input => {
  return {
    ...input,
    src: input.src || input.image
  }
}
