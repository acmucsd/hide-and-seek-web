import React, { useEffect, useState } from 'react';
import './index.scss';
import DefaultLayout from "../../components/layouts/default";
import { getDimension } from '../../actions/dimensions';
import DimensionCard from '../../components/DimensionCard';
import { Button } from "antd";
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
          <p className='subtext'>Full details on the competition will be released on Tuesday 6PM!</p>
          <div className='register-wrapper'>
          {/* <Link to='register'><Button className='registerbtn'>Register</Button></Link> */}
          </div>
          
        </div>
      </div>
    </DefaultLayout>
  );
}

export default MainPage
