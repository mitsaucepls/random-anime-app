import { useSettingsStore } from '@/stores/SettingsStore';
import { WebView, type WebViewProps } from 'react-native-webview';

export default function AnimeModel({ style, ...otherProps }: WebViewProps) {
  const { resource, api } = useSettingsStore((state) => state);
  const htmlTemplate = `
<!DOCTYPE html>
<html>
    <head>
        <title>Random Anime App</title>
        <meta name="viewport" content="width=device-width, initial-scale=0.8">
        <script src="https://fastly.jsdelivr.net/gh/samunatsu/live2d-widget-enhanced/dist/core.min.js"></script>
        <script>
            l2dwe.init({
                api: new l2dwe.RemoteCdn('https://fastly.jsdelivr.net/gh/${api}'),
                resource: 'https://fastly.jsdelivr.net/gh/${resource}/dist',
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
      style={[{ backgroundColor: 'transparent' }, { marginBottom: 10 }, style]}
      {...otherProps}
    />
  );
}
