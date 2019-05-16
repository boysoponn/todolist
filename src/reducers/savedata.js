export default (state = [], { type, data }) => {
    switch (type) {
      case 'savedata':
        return state = data
      default:
        return state
    }
  }