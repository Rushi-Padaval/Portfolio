import '../styles/About.css';

//import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

import Portrait from '../images/portrait.png';
import Coursework from '../data/coursework.js';
import GPA from '../data/gpa.json';

function About() {
    const [dropped, setDropped] = useState(false);

    function dropdown() {
        if(!dropped) {
            document.getElementById('dropdown-content').style.opacity = 1;
            document.getElementById('dropdown-content').style.maxHeight = '1000px';
            setDropped(true);
        } else {
            document.getElementById('dropdown-content').style.opacity = 0;
            document.getElementById('dropdown-content').style.maxHeight = 0;
            setDropped(false);
        }
        
    }

	return(
		<div id='container'>
			<p className='header'>
				&lt;About&gt;
			</p>
			<div className='content'>
				<span id='text'>
					<p className='about-section'>
						I'm a  undergraduate student at D.Y. Patil Technical Campus studying
						Computer Science, looking for internship experience before I
                        graduate on June 2025.
					</p>
					<p className='about-section'>
						Currently, I'm learning skills and technologies for Full Stack Development,
                        , Reactjs and  Wordpress development.
					</p>
					<p className='about-section'>
						Downloads: <a className='download' href='' download>Resume</a>,
					</p>
                    <p className='about-section' style={{ display: 'flex' }}>
                        <button onClick={dropdown} className='dropdown-button'>
                            <FaBars style={{ marginTop: '2px', marginRight: '2px' }} />
                            Key Courses
                        </button>
                        <div id='dropdown-content'>
                            <p className='dropdown-gpa'>
                                <p className='dropdown-gpa-overall'>
                                    RESULT:
                                    <span className='dropdown-gpa-grade'>
                                        &nbsp;{GPA.overall}
                                    </span>
                                </p>
                                <p className='dropdown-gpa-major'>
                                    DEGG:
                                    <span className='dropdown-gpa-grade'>
                                        &nbsp;{GPA.major}
                                    </span>
                                </p>
                            </p>
                            { Coursework.map(course => {
                                return(
                                    <p className='dropdown-item'>
                                        <span className='dropdown-item-code'>
                                            {course.code}
                                        </span>
                                        <span className='dropdown-item-title'>
                                            &nbsp;{course.title}:
                                        </span>
                                        <span className='dropdown-item-grade'>
                                            &nbsp;{course.grade}
                                        </span>
                                    </p>
                                );
                            }) }
                        </div>
                    </p>
				</span>
				<span id='portrait-container'>
					<img id='portrait' src={Portrait} alt='portrait'></img>
				</span>
			</div>
		</div>
	);
}

export default About;