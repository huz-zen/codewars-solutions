function printerError(s) {
    // your code
  const alteredString = s.replace(/[^a-m]/g, '');
  return (s.length-alteredString.length).toString()+"/"+(s.length).toString()
}