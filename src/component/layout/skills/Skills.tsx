import React from 'react'
import { useState, useEffect } from 'react'
import { LinearProgress } from '@mui/material';

type Props = {}



function Skills({}: Props) {
	const [progress, setProgress] = useState(0);
	const [html, setHtml] = useState(0);
	const [css, setCss] = useState(0);
	const [js, setJs] = useState(0);
	const [figma, setFigma] = useState(0);
	const [reactjs, setReact] = useState(0);
	const [gsap, setGsap] = useState(0);
	const [sass, setSass] = useState(0);
	const timer = setInterval(() => {
		setProgress((oldProgress) => {
			return Math.min(oldProgress + 1, 50);
		});
		setSass((oldProgress) => {
			return Math.min(oldProgress + 1, 70);
		});
		setHtml((oldProgress) => {
			return Math.min(oldProgress + 1, 80);
		});
		setCss((oldProgress) => {
			return Math.min(oldProgress + 1, 80);
		});
		setJs((oldProgress) => {
			return Math.min(oldProgress + 1, 60);
		});
		setFigma((oldProgress) => {
			return Math.min(oldProgress + 1, 60);
		});
		setReact((oldProgress) => {
			return Math.min(oldProgress + 1, 50);
		});
		setGsap((oldProgress) => {
			return Math.min(oldProgress + 1, 30);
		});
	}, 200);
	
  return (
    <div className='skillsgrid'>
		<div className='skillColumn'>
			  <div>
				  <label className ='skillsLabel'>HTML</label>
        		<LinearProgress variant="determinate" value={html} color='success' style={{height: 15}} />
			</div>
			  <div>
				<label className ='skillsLabel'>CSS</label>
        		<LinearProgress variant="determinate" value={css} color='success' style={{height: 15}} />
			</div>
			<div>
				<label className ='skillsLabel'>JS</label>
        		<LinearProgress variant="determinate" value={js} color='success' style={{height: 15}} />
			</div>
			<div>
				<label className ='skillsLabel'>FIGMA</label>
        		<LinearProgress variant="determinate" value={js} color='success' style={{height: 15}} />
      		</div>
		</div>
		<div className='skillColumn'>
			<div>
				<label className ='skillsLabel'>GSAP</label>
        		<LinearProgress variant="determinate" value={gsap} color='success' style={{height: 15}} />
			</div>
			<div>
				<label className ='skillsLabel'>SASS</label>
        		<LinearProgress variant="determinate" value={sass} color='success' style={{height: 15}} />
			</div>
			<div>
				<label className ='skillsLabel'>REACTJS</label>
        		<LinearProgress variant="determinate" value={figma} color='success' style={{height: 15}} />
			  </div>
			<div>
				<label className ='skillsLabel'>THREE JS</label>
        		<LinearProgress variant="determinate" value={gsap} color='success' style={{height: 15}} />
      		</div>
		</div>
    </div>
  )
}

export default Skills;