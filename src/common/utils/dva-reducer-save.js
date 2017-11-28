export default function save(state, action) {
  return { ...state, ...action.payload }
}
