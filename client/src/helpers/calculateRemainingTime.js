const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime*1000).getTime();
  const remainingTime = adjExpirationTime - currentTime;
  return remainingTime;
};

export default calculateRemainingTime;
