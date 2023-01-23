module.exports = {
    dev: {
    "default-src": ["'self'"],
    "style-src": [
      "'self'",
      "*.typicode.com",
    ]
    },
    prod: {
    "default-src": "'self'",  // can be either a string or an array.
    "style-src": [
      "'self'",
      "*.typicode.com",
    ],
    "connect-src": [
      "'self'",
      "*.typicode.com"
    ]
    }
  }