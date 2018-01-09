module.exports = (entry, add) => (Array.isArray(entry) ? [add, ...entry] : [add, entry])
