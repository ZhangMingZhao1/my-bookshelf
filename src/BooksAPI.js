const api = "https://reactnd-books-api.udacity.com";

//生成一个唯一的标记，用于将书架数据存储在后端服务器上

let token = localStorage.token;
if (!token){
    token = localStorage.token = Math.random().toString(36).substr(-8);
}

//授权头
const headers = {
  'Accept': 'application/json',
  'Authorization': token
};

export const get = (bookId) =>
  fetch(`${api}/books/${bookId}`, { headers })
      .then(res => res.json())
      .then(data => data.book);

export const getAll = () =>
  fetch(`${api}/books`, { headers })
      .then(res => res.json())
      .then(data => data.books);

export const update = (book, shelf) =>
  fetch(`${api}/books/${book.id}`, {
      method: 'PUT',
      headers: {
          ...headers,
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({shelf})
  }).then( res => res.json());

export const search = (query, maxResults) =>
  fetch(`${api}/search`, {
    method: 'POST',
    header: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, maxResults })
  }).then(res => res.json())
    .then(data => data.books)

