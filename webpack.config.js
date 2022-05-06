module.exports = function(env) {
  var envid = env.dev ? "dev" : "prod";
  return require(`./webpack.${envid}.config`);
};