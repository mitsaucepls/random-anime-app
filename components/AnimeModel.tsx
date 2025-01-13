import WebView from 'react-native-webview';

const AnimeModel: React.FC = () => {
  const htmlTemplate = `
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://fastly.jsdelivr.net/gh/samunatsu/live2d-widget-enhanced@latest/dist/core.min.js"></script>
        <script>
            l2dwe.init({
                api: new l2dwe.RemoteCdn('https://fastly.jsdelivr.net/gh/fghrsh/live2d_api'),
                resource: 'https://fastly.jsdelivr.net/gh/samunatsu/live2d-widget-enhanced@latest/dist',
            });
        </script>
    </head>
    <body>
    </body>
</html>
  `;

  return (
    <WebView
      originWhitelist={['*']}
      source={{ html: htmlTemplate, baseUrl: 'http://localhost' }}
      webviewDebuggingEnabled
    />
  );
};

export default AnimeModel;
