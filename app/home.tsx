import { Text, View } from "react-native";
import ReactLive2d from '../CubismWebSamples/Samples/TypeScript/Demo/src/index.js';
// import { useEffect, useState } from "react";
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
      <ReactLive2d
        width={300}
        height={500}
        bottom={'10px'}
        right={'10px'}
        ModelList={['Haru', 'Hiyori']}
        TouchBody={['啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊你要干嘛', '哼', '坏人']}
      />
    </div>
  );
};


export default function Index() {
  const htmlContent = ReactDOMServer.renderToString(<AnimeModel />)
  const htmlTemplate = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
        </style>
      </head>
      <body>
        ${htmlContent}
      </body>
    </html>
  `;
  return (
    <WebView
      originWhitelist={['*']}
      source={{ html: htmlTemplate }}
    />
  );
}
//   const [release,setRelease] = useState(false)

//   // function handleClick() {
//   //     setRelease(true)
//   //     props.history.push({ pathname: "/Other" });
//   // }
//   useEffect(() => {

//   }, []);
//   return (
//   );
// }
