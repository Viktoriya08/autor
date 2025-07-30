module.exports = {
  apps: [
    {
      name: 'nuxtApp',
      script: './.output/server/index.mjs',
      // args: 'start',
      cwd: '/var/www/html/author',
      instances: 1,
      autorestart: true,
      watch: false,
      // max_memory_restart: '500M',
      env: {
        NODE_ENV: 'production',
        PORT: 5005, // укажи нужный порт, если другой
      },
      error_file: '../logs/frontend-err.log',
      out_file: '../logs/frontend-out.log',
      log_file: '../logs/frontend-combined.log',
    },
  ],
};
