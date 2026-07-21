module.exports = {
  apps: [
    {
      name: "",
      cwd: "/var/www/next-app",
      script: "npm",
      args: "run start -- -p 3000",
      env: {
          NODE_ENV: "production"
	}    
    }
  ]
}
