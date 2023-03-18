import { Button, Typography, Avatar } from '@material-ui/core';
import { YouTube, GitHub, LinkedIn, Twitter } from '@material-ui/icons';
import './about.css';
import MetaData from './MetaData';

export const Podcast = () => {
  const visitGithub = () => {
    window.location.replace('https://github.com/hesbon-osoro');
  };
  return (
    <div className="aboutSection">
      <MetaData title="About" />
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">Bitcoin Podcast</Typography>
        <div>
          <div>
            <Avatar
              style={{ width: '10vmax', height: '10vmax', margin: '2vmax 0' }}
              src="./src/assets/bitcoinpodcast.jpeg"
              alt="Founder"
            />
            <Typography>The Bitcoins's developers' podcast</Typography>
            <span>
              Bitcoin Podcast <br />
              Always Improving. <br />
              Giving hope. <br />
              This is just an example podcast. <br />
              The idea is to try/test continuous LN payments while listening.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Connect to the Podcast</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
