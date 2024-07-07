/*
  ------------------------------------------------------------------------
  Function to store a new cookie with username.
  ------------------------------------------------------------------------
*/
function setCookie(name, value, days) {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

/*
  ------------------------------------------------------------------------------
  Function to obtain the existing authenticated user for subsequent requests.
  ------------------------------------------------------------------------------
*/
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

/*
  ------------------------------------------------------------------------------
  Function to verify if user is logged in and redirect if it is the case.
  ------------------------------------------------------------------------------
*/
function checkAndRedirect() {
  currentUrl = window.location.href;
  if (getCookie('username')
    && currentUrl !== 'http://localhost:3000/logout'
  ) {
      window.location.href = '/home';
  }
  if (! getCookie('username') && currentUrl === 'http://localhost:3000/logout') {
    window.location.href = '/login';
  }
}

// Execute the function when the page starts loading
window.onload = checkAndRedirect;
/*
  ------------------------------------------------------------------------
  Function to add a new user.
  ------------------------------------------------------------------------
*/
const newUser = async () => {
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  validateInputs(username, password);
  const formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);

  let url = 'http://127.0.0.1:5000/user/create';
  fetch(url, {
      method: 'post',
      body: formData
  })
  .then((response) => {
      httpStatus = response.status;
      return response.json();
  })
  .then(data => {
      if (httpStatus !== 200
      && httpStatus !== 201
      ) {
      throw data[0].ctx.error;
      } else {
        setCookie('username', data.username, 7);
        alert('Usuário criado!');
        window.location.href = '/home';
      }
  })
  .catch((error) => {
      console.error('Error:', error);
      alert(error)
      });
  }

/*
  ------------------------------------------------------------------------
  Function to login with an existing user.
  ------------------------------------------------------------------------
*/
const loginUser = async () => {
  let username = document.getElementById('usernameLogin').value ?? '';
  let password = document.getElementById('passwordLogin').value ?? '';
  validateInputs(username, password);
  const formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);

  let url = 'http://127.0.0.1:5000/user/validate';
  fetch(url, {
      method: 'post',
      body: formData
  })
  .then((response) => {
      httpStatus = response.status;
      return response.json();
  })
  .then(data => {
      if (httpStatus !== 200
      && httpStatus !== 201
      ) {
      throw data[0].ctx.error;
      } else {
        setCookie('username', data.username, 7);
        alert('Login realizado!');
        window.location.href = '/home';
      }
  })
  .catch((error) => {
      console.error('Error:', error);
      alert(error)
      });
  }

  /*
  ------------------------------------------------------------------------
  Function to logout the existing user.
  ------------------------------------------------------------------------
*/
const logoutUser = async () => {
  let username = document.getElementById('usernameLogout').value ?? '';
  let password = document.getElementById('passwordLogout').value ?? '';
  validateInputs(username, password);
  const formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);

  let url = 'http://127.0.0.1:5000/user/validate';
  fetch(url, {
      method: 'post',
      body: formData
  })
  .then((response) => {
      httpStatus = response.status;
      return response.json();
  })
  .then(data => {
    if (httpStatus !== 200
      && httpStatus !== 201
    ) {
      throw data[0].ctx.error;
    } else {
      if (data.username === getCookie('username')) {
        document.cookie = 'username' + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        alert('Você se deslogou com sucesso!');
      } else {
        throw 'Ocorreu um erro ao se deslogar!';
      }
    }
  })
  .catch((error) => {
    console.error('Error:', error);
    alert(error)
  })
  .finally(() => {
    window.location.href = '/login';
  });
}

  /*
  ------------------------------------------------------------------------
  Function to validate user's inputs.
  ------------------------------------------------------------------------
*/
const validateInputs = (username, password) => {
  let message = [];
  if (username.replace(/\s+/g, '') === '') {
    message = ['O nome de usuário é obrigatório!\n'];
  }
  if (password.replace(/\s+/g, '') === '') {
    message.push('A senha é obrigatória!');
  }
  if (message.length > 0) {
    return alert(message);
  }
}
