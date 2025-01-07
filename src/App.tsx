import { memo } from 'react';
import './App.css';

const emailLink = <a target="_blank" rel="noreferrer" className="hyperlink" href="mailto:estelle.booher@gmail.com">estelle.booher@gmail.com</a>;
const githubLink = <a target="_blank" rel="noreferrer" className="hyperlink" href="https://github.com/EllarBooher">https://github.com/EllarBooher</a>;

interface DisplayCardProps {
  hyperlink: string;
  thumbnailAssets: Array<URL>;
  title: string;
  description: string;
}

const DisplayCard = memo(({
  hyperlink, 
  thumbnailAssets=[],
  title=`PLACEHOLDER TITLE`, 
  description=`PLACEHOLDER DESCRIPTION`
}: DisplayCardProps) => {
  const thumbnails = <div className="DisplayCard-thumbnails">{
    thumbnailAssets.map((url: URL) => 
      <div className="DisplayCard-thumbnail" key={url.toString()}>
        <img className="DisplayCard-image" src={url.toString()} alt=""/>
      </div>)
  }</div>;

  return (<a className="DisplayCard" href={hyperlink} target="_blank" rel="noreferrer">
    <div>
      <div className="DisplayCard-name">
        {title}
      </div>
      <div className="DisplayCard-body">
        {description}
        {thumbnails}
      </div>
    </div>
  </a>);
});

function App() {
  return (
    <div className="App">
      <header className="website-header">
        Estelle Booher
      </header>
      <div className="website-main">
        <div>
          Hello, my name is Estelle Booher. 
          My passion is realtime rendering and engine infrastructure, and
          I am actively working on building a portfolio and career in computer graphics.
          This website is a landing spot where I will host links to various projects of mine.
          <br/>
          <br/>
          My github is at {githubLink}, where I host the source code of my projects including this website.
          <br/>
          To contact me, please email at {emailLink}.
          <br/>
          <h1>WebGPU</h1>
          <div className="DisplayGrid">
            <DisplayCard 
              hyperlink={`/hello-triangle`} 
              thumbnailAssets={[]}
              title={`Hello Triangle`} 
              description={`
                Test of WebGPU.
              `}
            />
          </div>
          <h1>Computer Graphics Offline</h1>
          <div className="DisplayGrid">
            <DisplayCard 
              hyperlink={`https://github.com/EllarBooher/Syzygy`} 
              thumbnailAssets={[ new URL('./assets/syzygy1.png', import.meta.url) ]}
              title={`Syzygy`} 
              description={`
                A sandbox renderer I started to study C++ and Vulkan. 
                It aims to be a testbed of various features and techniques.
              `}
            />
            <DisplayCard 
              hyperlink={`https://github.com/EllarBooher/VulkanTemplate/tree/SSAO`} 
              thumbnailAssets={[ new URL('./assets/ssao1.png', import.meta.url) ]}
              title={`SSAO`} 
              description={`
                An implementation of Screen-Space Ambient Occlusion.
              `}
            />
          </div>
          <h1>Video Games</h1>
          <DisplayCard 
            hyperlink={`https://ellarbooher.itch.io/snail-blazer`}
            thumbnailAssets={[ new URL('./assets/snailblazer1.png', import.meta.url), new URL('./assets/snailblazer2.png', import.meta.url)]}
            title={`Snail Blazer`}
            description={`
              A short bullet-hell made for the Bullet Hell Jam 2023 on itch.io. 
              The player primarily moves via grappling on enemy projectiles and the environment, 
              instead of the conventional WASD-style of movement.
            `}
          />
        </div>
      </div>
      <footer className="website-footer">
        All works present are copyrighted, unless provided with external attributions or license.
      </footer>
    </div>
  );
}

export default App;
