# serverless-rollbar-example

An example repository showing how to utilise a winston logger transport to escalate logs to Rollbar.

```bash
export ROLLBAR_SERVER_ACCESS_TOKEN=<your_access_token here>
git clone git@github.com:GorillaStack/serverless-rollbar-example.git
npm install
sls deploy
sls invoke -f happyEndpoint
sls invoke -f unhappyEndpoint
```

