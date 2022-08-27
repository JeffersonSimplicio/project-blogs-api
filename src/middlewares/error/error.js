function errorHandling(err, _req, res, _next) {
  res.status(500).json(
    { message: `Algo deu errado! Mensagem: ${err.message}` },
    );
}

module.exports = errorHandling;