const calculateRemainingTime = (expTimeMiliseconds) => {
  const currentTime = new Date().getTime();
  const expTime = expTimeMiliseconds * 1000;
  const adjExpirationTime = new Date(expTime).getTime();
  const remainingTime = adjExpirationTime - currentTime;
  return remainingTime;
};

export default calculateRemainingTime;
