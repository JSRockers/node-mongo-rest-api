const sendResponse = (res, statusCode, data, message) => {
  let status = 'failed';
  // regex pattern validate status should be 3 digits
  const digitsOfStatusCode = /^[0-9]{3}$/;

  // check the statusCode is 3 digit number
  if (!digitsOfStatusCode.test(statusCode)) {
    throw new Error('Status code should be three digit number');
  }

  // regex success status code start with 2xx or 3xx
  const pattern = /^[23]\d{2}$/;

  // check if pattern matches status code
  if (pattern.test(statusCode)) {
    status = 'success';
  }

  return res.status(statusCode).json({
    data,
    status,
    message,
  });
};

module.exports = sendResponse;
