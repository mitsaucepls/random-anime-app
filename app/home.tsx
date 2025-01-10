import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import { WebView } from "react-native-webview";

export default function Index() {
  const [release, setRelease] = useState(false);

  // Generate the HTML content for the WebView
  const generateWebViewContent = () => `
    <!DOCTYPE html>
    <html>
    <head>
      <script src="../CubismWebSamples/Core/live2dcubismcore.js"></script>
      <script>
        document.addEventListener("DOMContentLoaded", () => {
          // Initialize the Live2D model
          const canvas = document.getElementById("canvas");
          const modelList = ['Haru', 'Hiyori'];
          const touchResponses = [
            '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊你要干嘛',
            '哼',
            '坏人'
          ];

          const loadModel = (modelName) => {
            // Example function to load a model dynamically
            console.log(\`Loading model: \${modelName}\`);
          };

          modelList.forEach(loadModel);

          // Example interaction listener
          canvas.addEventListener("click", () => {
            const randomResponse = touchResponses[Math.floor(Math.random() * touchResponses.length)];
            alert(randomResponse);
          });
        });
      </script>
    </head>
    <body>
      <canvas id="canvas"></canvas>
    </body>
    </html>
  `;

  return (
    <View style={{ flex: 1 }}>
      <WebView
        originWhitelist={['*']}
        source={{ html: generateWebViewContent() }}
        javaScriptEnabled={true}
        style={{ flex: 1 }}
      />
    </View>
  );
}
