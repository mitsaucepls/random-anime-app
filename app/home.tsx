import { WebView } from 'react-native-webview';
import ReactDOMServer from 'react-dom/server';

const AnimeModel: React.FC = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
            }}
        >
            <p>Anime Model</p>
        </div>
    );
};


export default () => {
    const htmlContent = ReactDOMServer.renderToString(<AnimeModel />)
    const htmlTemplate = `
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
        body { font-family: Arial, sans-serif; margin: 12% 10px 0px 10px; padding: 0; }
        </style>
        <script src="https://fastly.jsdelivr.net/gh/samunatsu/live2d-widget-enhanced@latest/dist/core.min.js"></script>
    </head>
    <body>
    ${htmlContent}
        <script>
        l2dwe.init({
            api: new l2dwe.RemoteCdn('https://fastly.jsdelivr.net/gh/fghrsh/live2d_api'),
            resource: 'https://fastly.jsdelivr.net/gh/samunatsu/live2d-widget-enhanced@latest/dist',
        });
        </script>
    </body>
</html>
  `;

    return (
        <WebView originWhitelist={['*']} source={{ html: htmlTemplate, baseUrl: 'http://localhost' }} webviewDebuggingEnabled />
    );
}
