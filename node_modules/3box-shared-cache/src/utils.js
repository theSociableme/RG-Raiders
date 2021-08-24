const deserialize = (v) => {
  const r = JSON.parse(v)

  if (r.type && r.type === 'Buffer') {
    return Buffer.from(r.data)
  }

  return r
}

const serialize = (v) => JSON.stringify(v)

export {
  serialize,
  deserialize
}
