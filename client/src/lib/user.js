export default function Auth(data) {
  if (!data) return undefined;
  const user = data.user;
  const userName = user.userName;
  const sessionId = user.sessionId;
  if (!userName && !sessionId) return undefined;
  return true;
}
