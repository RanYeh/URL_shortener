const btnCopy = document.querySelector('#btn-copy')

btnCopy.addEventListener('click', function onCopyBtnClicked() {
  const generatedShortUrl = document.querySelector('#generated-short-url')

  navigator.clipboard.writeText(generatedShortUrl.textContent)
    .then(alert('URL has been Copied!'))
    .catch(error => console.error(error))
})