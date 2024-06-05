import express from "express"
import fetch from "node-fetch"

const app = express();
const port = process.env.PORT || 30102;
const jsonPlaceholder = "https://jsonplaceholder.typicode.com";
const sendData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

app.get("/albums", async (req, res) => {
  const url = `${jsonPlaceholder}/albums`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const data = await sendData(url, options);
  res.send(JSON.stringify(data));
});
app.get("/albums/:id", async (req, res) => {
  const url = `${jsonPlaceholder}/albums/${req.params.id}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const data = await sendData(url, options);
  res.send(JSON.stringify(data));
});
app.get("/photos", async (req, res) => {
  const url = `${jsonPlaceholder}/photos`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const data = await sendData(url, options);
  res.send(JSON.stringify(data));
});
app.get("/photos/:id", async (req, res) => {
  const url = `${jsonPlaceholder}/photos/${req.params.id}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const data = await sendData(url, options);
  res.send(JSON.stringify(data));
});
app.get("/todos", async (req, res) => {
  const url = `${jsonPlaceholder}/todos`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const data = await sendData(url, options);
  res.send(JSON.stringify(data));
});
app.get("/todos/:id", async (req, res) => {
  const url = `${jsonPlaceholder}/todos/${req.params.id}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const data = await sendData(url, options);
  res.send(JSON.stringify(data));
});
app.get("/comments", async (req, res) => {
  const url = `${jsonPlaceholder}/comments`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const data = await sendData(url, options);
  res.send(JSON.stringify(data));
});
app.get("/comments/:id", async (req, res) => {
  const url = `${jsonPlaceholder}/comments/${req.params.id}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const data = await sendData(url, options);
  res.send(JSON.stringify(data));
});
app.get("/users", async (req, res) => {
  const url = `${jsonPlaceholder}/users`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const data = await sendData(url, options);
  res.send(JSON.stringify(data));
});
app.get("/users/:id", async (req, res) => {
  const url = `${jsonPlaceholder}/users/${req.params.id}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const data = await sendData(url, options);
  res.send(JSON.stringify(data));
});

app.get("/posts", async (req, res) => {
  const url = `${jsonPlaceholder}/posts`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const data = await sendData(url, options);
  res.send(JSON.stringify(data));
});

app.get("/posts/:id", async (req, res, next) => {
  const url = `${jsonPlaceholder}/posts/${req.params.id}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const data = await sendData(url, options);
  res.send(JSON.stringify(data));
});

app.post("/posts", async (req, res, next) => {
  const url = `${jsonPlaceholder}/posts`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    /* Ex:
    {
      title: "foo",
      body: "bar",
      userId: 1,
    }
    */
    body: JSON.stringify(req.body),
  };
  const data = await sendData(url, options);
  res.send(JSON.stringify(data));
});

app.put("/posts/:id", async (req, res, next) => {
  const url = `${jsonPlaceholder}/posts/${req.params.id}`;
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    /* Ex:
    {
      id: id,
      title: "foo",
      body: "bar",
      userId: 1,
    }
    */
    body: JSON.stringify(req.body),
  };
  const data = await sendData(url, options);
  res.send(JSON.stringify(data));
});

app.delete("/posts/:id", async (req, res, next) => {
  const url = `${jsonPlaceholder}/posts/${req.params.id}`;
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const data = await sendData(url, options);
  res.send(JSON.stringify(data));
});

app.listen(port, () => {
  console.log(`API Tutorial listening on port ${port}`);
});
