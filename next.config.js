/** @type {import('next').NextConfig} */
const {PHASE_DEVELOPMENT_SERVER} =  require('next/constants')
const nextConfig = (phase) => {
 if (phase === PHASE_DEVELOPMENT_SERVER) {
  return {
    reactStrictMode: true,
    swcMinify: true,
    env: {
      mongodb_username: 'ilo',
      mongodb_password: 'nextblog',
      mongodb_clusterName: 'cluster0',
      mongodb_databaseName: 'blog',
      mongodb_collection: 'dev-messages'
    }
  }
 }

  return {
    reactStrictMode: true,
    swcMinify: true,
    env: {
      mongodb_username: 'ilo',
      mongodb_password: 'nextblog',
      mongodb_clusterName: 'cluster0',
      mongodb_databaseName: 'blog',
      mongodb_collection: 'messages'
    }
  }

}

module.exports = nextConfig
