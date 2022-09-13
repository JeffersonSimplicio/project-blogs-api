function connectionCheck(_req, res) {
  const urlImage = 'https://www.intoxianime.com/wp-content/uploads/2022/06/s2.jpg';
  res.send(`<H1>The server is online.</H1>
  <img src="${urlImage}" alt="Ushio Kofune like" style="width:500px">`);
}

module.exports = connectionCheck;