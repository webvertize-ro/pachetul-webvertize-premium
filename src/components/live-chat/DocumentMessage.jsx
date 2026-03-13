function DocumentMessage({ link, name }) {
  return (
    <a href={link} target="_blank">
      {name}
    </a>
  );
}

export default DocumentMessage;
