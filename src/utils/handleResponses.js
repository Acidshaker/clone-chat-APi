// TODO Respuestas exitosas

const success = ({ status, data, message, res }) => {
  res.status(status).json({
    error: false,
    status: status,
    message: message,
    data: data,
  });
};

// ?! Respuestas de errores

const error = ({ status, fields, message, res }) => {
  res.status(status).json({
    error: true,
    status: status,
    message: message,
    fields: fields,
  });
};

module.exports = {
  success,
  error,
};
