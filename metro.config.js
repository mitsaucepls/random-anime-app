// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push("node");
config.resolver.sourceExts = [...config.resolver.sourceExts, "cjs"];
// Exclude unsupported dynamic imports
config.resolver.blacklistRE = /onnxruntime-node|react-dom\/server\.node|sharp/;
config.transformer = {
  ...config.transformer,
  unstable_allowRequireContext: true,
};


module.exports = withNativeWind(config, { input: './global.css' });
