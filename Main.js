async function download(link) {
  if (!link) { return; }
  const opened = await window.open(link, 'Download')
  setTimeout(() => { opened.close(); }, 5000);

}
