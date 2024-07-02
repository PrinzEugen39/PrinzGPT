module.exports = {
  apps: [
    {
      name: "Prinz GPT",
      script: "npm",
      args: "start -- -p 3901",
      watch: true,
    },
  ],

  deploy: {
    production: {
      user: "satori",
      host: "103.253.145.125",
      ref: "origin/main",
      repo: "git@github.com:PrinzEugen39/PrinzGPT.git",
      path: "/home/satori/prinz-gpt",
      "pre-deploy-local": "",
      "post-deploy":
        "source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
      "ssh_options": "ForwardAgent=yes"
    },
  },
};
