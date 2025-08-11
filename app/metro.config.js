
const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);
config.transformer.minifierConfig = { keep_classnames: true };
module.exports = config;

