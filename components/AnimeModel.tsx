import { useSettingsStore } from '@/stores/SettingsStore';
import { WebView, type WebViewProps } from 'react-native-webview';

interface AnimeModelProps extends WebViewProps {
  onToggleChat: () => void;
}

export default function AnimeModel({ style, onToggleChat, ...otherProps }: AnimeModelProps) {
  const { api } = useSettingsStore((state) => state);
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
                resource: 'https://fastly.jsdelivr.net/gh/SamuNatsu/live2d-widget-enhanced/dist',
            });
        </script>
        <style>
            #waifu-tips,
            #waifu-tips.waifu-tips-active,
            #waifu-tips span {
                display: none !important;
            }
            #waifu {
              bottom: -1000px;
              left: 50%;
              line-height: 0;
              margin-bottom: -10px;
              position: fixed;
              transform: translate(-50%, 3px) scale(1.5);
              transform-origin: bottom center;
              transition: transform 0.3s ease-in-out, bottom 3s ease-in-out;
              z-index: 1;
            }
            #waifu-tool {
              bottom: 0;
              color: #aaa;
              opacity: 1;
              position: absolute;
              top: 70px;
              transition: opacity 1s;
            }
            #waifu-toggle {
              background-color: #fa0;
              border-radius: 5px;
              bottom: 66px;
              color: #fff;
              cursor: pointer;
              font-size: 12px;
              left: 0;
              margin-left: -100px;
              padding: 5px 2px 5px 5px;
              position: fixed;
              transition: margin-left 1s;
              width: 60px;
              writing-mode: vertical-rl;
            }
            #waifu-toggle.waifu-toggle-active {
              margin-left: -50px;
            }
            #waifu-toggle.waifu-toggle-active:hover {
              margin-left: -30px;
            }
            #waifu:hover {
              transform: translate(-50%, 0) scale(1.5);
            }
            #live2d {
              cursor: grab;
              height: 300px;
              position: relative;
              width: 300px;
            }
            #live2d:active {
              cursor: grabbing;
            }
            #waifu:hover #waifu-tool {
              opacity: 1;
            }
            #waifu-tool span {
              display: block;
              height: 30px;
              text-align: center;
            }
            #waifu-tool svg {
              fill: #7b8c9d;
              cursor: pointer;
              height: 25px;
              transition: fill 0.3s;
            }
            #waifu-tool svg:hover {
              fill: #0684bd; /* #34495e */
            }
        </style>
    </head>
    <body>
    </body>
</html>
  `;

  const runFirst = `
    const waifuTool = document.getElementById('waifu-tool-hitokoto');
    if (waifuTool) {
      waifuTool.addEventListener('click', () => {
        window.ReactNativeWebView.postMessage("tool clicked")
      });
    }
    true;
  `;

  return (
    <WebView
      originWhitelist={['*']}
      source={{ html: htmlTemplate, baseUrl: 'http://localhost' }}
      onMessage={(event) => {
        if (event.nativeEvent.data === "tool clicked") {
          if (typeof onToggleChat === "function") {
            onToggleChat();
          } else {
            console.warn("onToggleChat is not a function");
          }
        }
      }}
      webviewDebuggingEnabled
      injectedJavaScript={runFirst}
      style={[
        { backgroundColor: 'transparent', marginBottom: 10 },
        style,
      ]}
      {...otherProps}
    />
  );
}
