const connection = new WebSocket('ws://localhost:8080')
connection.addEventListener('message', message => {
  let {book} = JSON.parse(message.data)
  displayBook(book)
})