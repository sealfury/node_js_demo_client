const apiUrl = "http://localhost:3000";
const displayBookIndex = async () => {
  const data = await (await fetch(apiUrl + "/books")).json();
  data.books.forEach(book => {
    displayBook(book);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  displayBookIndex();
});
