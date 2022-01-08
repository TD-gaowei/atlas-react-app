import TokenGenerator from './config/token.generator'

// Setup env vars so that we keep source code env agnostic
window.env = process.env.REACT_APP_ENV;

TokenGenerator.initialize(() => Promise.resolve('fake-auth-token'));
