export function getUrl() {
    if (process.env.NODE_ENV === 'production') return 'https://aurasic-api.herokuapp.com/api/'
    else return process.env.REACT_APP_API_URL
  }