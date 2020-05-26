import React, { useEffect, useState } from 'react';
import './index.less';
import DefaultLayout from "../../components/layouts/default";
import { getDimension } from '../../actions/dimensions';
import DimensionCard from '../../components/DimensionCard';
import { Button } from "antd";
import { OPEN_TO_PUBLIC, TOURNAMENT_ID } from '../../configs';
import { DimensionType } from 'dimensions-ai';
import { Link } from 'react-router-dom';
function MainPage() {
  const [dimensions, setDimensions] = useState<{[x in string]: DimensionType}>({});
  useEffect(() => {
    getDimension().then((res: any) => {
      //@ts-ignore
      setDimensions(res);
    }).catch((error) => {
      console.error(error);
    });
  }, []);
  return (
    <DefaultLayout>
      <div className='Main'>
        <div className='hero'>
          <h1 id='title'>ACM AI Competition</h1>
          <p className='subtext'>Full details on the competition will be released on Tuesday 6PM Pacific Time!</p>
          <div className='register-wrapper'>
          <Link to='register'><Button className='registerbtn'>Register</Button></Link>
          {
            OPEN_TO_PUBLIC && <a href='https://github.com/acmucsd/hide-and-seek-ai' target='_blank' rel="noopener noreferrer"><Button className='getstartedbtn'>Get Started</Button></a>
          }
          </div>
          
        </div>
        <div className='main-section'>
          <h1 className='statement'>Welcome to Hide and Seek 🙈🏃</h1>
          <p>You must use your wits and strategies, along with knowledge of programming, to effectively hide and see. Your AI must be able to play the <span className='seeker'>Seeker</span> and the <span className='hider'>Hider</span>, and must either find and tag all <span className='hider'>hiders</span> or hide from all <span className='seeker'>seekers</span>. Are you up for the challenge?</p>
          <div className='gif-div'>
            <img src="/hideandseek.gif">
            </img>
            <div className='caption'>A game of Hide and Seek where the blue <span className='seeker'>Seekers</span> swiftly find the <span className='hider'>Hiders</span> and corner them</div>
          </div>
          <p>We will open source the github repository with all the details at 6PM Tuesday, Pacific Time. Keep reading for more details regarding how this competition will work and how we will give out prizes</p>
        </div>
        <div className='main-section'>
          <h1 className='statement'>Ranking 📈</h1>
          <p>So you submitted your bot. What now? Check out <Link to={`/tournaments/${TOURNAMENT_ID}/ranks`}>the leaderboard</Link> to see how well your bot is doing! After submitting, you will need to give our servers some time to get around to scheduling matches for your bot.</p>
          <p>The way we rank players is through the Trueskill ranking system developed by Microsoft. You have 3 values associated with your ranking, a score, a mu (µ), and a sigma (σ)</p>
          <p>Mu represents our absolute measure of your player's skill. Sigma represents our confidence in that measure, with lower meaning higher confidence. Your score is then calculated as µ - 3 * σ and all players are ranked according to that</p>
          <br />
          <br />
          <h1 className='statement'>Prizes 🏆</h1>
          <p>At the moment, we have two prizes of $30 Amazon Gift cards for two categories</p>
          <h3 className='prize-title'>Overall Winner</h3>
          <p>$30 Amazon Gift card given to the highest ranking player. An email with the code will be sent to the player and will be recorded in ACM AI's history books!</p>
          <h3 className='prize-title'>Best hacker</h3>
          <p>$30 Amazon Gift card given to competitor who demonstrates (without actually doing anything malicious) the best reproducible hack into our competition systems. An email with the code will be sent to the player and will be recorded in ACM AI's history books!</p>
          <h1 className='statement'>Rules / Code of Conduct</h1>  


          <ol>
            <li>We Treat each other with respect. ACM is an all inclusive community. We accept and welcome people of all backgrounds and skill levels. Harassment, hate speech, and verbal abuse are STRICTLY prohibited and will result in an immediate ban from the competition.</li>
            <li>
            Any hacks, while encouraged to be sought out, must not actually be performed. We ask that you demonstrate it is possible, but to not actually perform said hack and you send the demonstration and code to us at ai@acmucsd.org. Moreover, you may not submit bots that perform the hack on the competition, we do not condone malicious activity. This includes but is not limited to, shutting down our servers, removing our files, reading other competitor's code etc.
            </li>
            <li>
            You are not allowed to open source your bot code until the conclusion of the competition as will be stated in this document and the website ai.acmucsd.com. You may talk about it with other competitors but we ask for the integrity of the competition that you don't share it.
            </li>
            <li>
              Have fun!
            </li>
          </ol>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default MainPage
