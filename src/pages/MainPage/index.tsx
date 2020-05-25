import React, { useEffect, useState } from 'react';
import './index.scss';
import DefaultLayout from "../../components/layouts/default";
import { getDimension } from '../../actions/dimensions';
import DimensionCard from '../../components/DimensionCard';
import { Button } from "antd";
import { OPEN_TO_PUBLIC } from '../../configs';
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
          <p>You must use wits and strategies, along with knowledge of programming, to effectively succeed. Your AI must be able to play the Seeker and the Hider, and must either find and tag all hiders or hide from all seekers.</p>
          <div className='gif-div'>
            <img src="/hideandseek.gif">
            </img>
            <div className='caption'>A game of Hide and Seek where the blue Seekers swiftly find the hiders and corner them</div>
          </div>
          <p>Find out how to get started on Tuesday 6PM Pacific Time. We will open source the github repository with all the details then.</p>
          
        </div>
      </div>
    </DefaultLayout>
  );
}

export default MainPage
