function requestSheet (key, cb) {
  Tabletop.init({
    key: key,
    callback: cb
  })
}