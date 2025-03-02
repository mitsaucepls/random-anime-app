import { WebView, type WebViewProps } from 'react-native-webview';

export default function AnimeModel({
  style,
  ...otherProps
}: WebViewProps) {
  const htmlTemplate = `
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=0.8">
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
      style={[{ backgroundColor: 'transparent' }, style]}
      {...otherProps}
    />
  );
};
