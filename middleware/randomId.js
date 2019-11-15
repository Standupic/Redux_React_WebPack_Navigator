export default (store) => (next) => (action) => {
    if (!action.generateId) return next(action)
    next({
      ...action,
      newTag: {...action.newTag, id: (Date.now() + Math.random()).toString()}
    })
  }