const getCookie = (key) => {
  const cookie = document.cookie;
  let cookies ;
  if (!cookie) return undefined;
  if (!cookies) {
    cookies = cookie.split('; ');
  }
  cookies = new Map(cookies.map((c) => c.split('=')));
  console.log(cookies);
  const value = cookies.get(key);
  return value;
}
console.log(document.cookie)
const State = {
  error: {
    login: false,
    logout: false,
    video: false,
    videos: false,
    rating: false,
  },
  user: {
    sessionId: getCookie('sessionId'),
    userName: getCookie('user'),
  },
  videos: undefined,
  playing: undefined,
}

export default State;