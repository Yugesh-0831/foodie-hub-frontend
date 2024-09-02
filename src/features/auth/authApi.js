export function createUser(userData) {
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:8080/users/signup", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    });
    const data = await responce.json();
    resolve({ data });
  });
}

export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      const responce = await fetch("http://localhost:8080/users/login", {
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: { "content-type": "application/json" },
      });
      if (responce.ok) {
        const data = await responce.json();
        resolve({ data });
      } else {
        const error = await responce.json();
        reject(error);
      }
    } catch (err) {
      reject({ err });
    }
  });
}
