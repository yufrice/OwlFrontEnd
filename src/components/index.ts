const req = require.context('.', true, /\.\/[^/]+\/[^/]+\/index\.ts$/);

req.keys().forEach((key) => {
    module.exports[
        key.replace(/^.+\/([^/]+)\/index\.ts/, '$1')]
        = req(key).default
});