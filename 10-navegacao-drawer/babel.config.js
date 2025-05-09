module.exports = function (api) {
api.cache(true);
return {
presets: ['babel-preset-expo'],
plugins: ['react-native-reanimated/plugin'],
};
};
// configuração da biblioteca de animação 
// do drawer so funciona om  biblioteca de gestos(no app.js) e animações (aqui)