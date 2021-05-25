import React, { Component } from 'react';
import SkillCards from '../../components/SkillCards';

import './skills.scss';
import skills from '../../utils/Skills';

class Skills extends Component {
	render() {
		return (
			<div className='skills'>
				<div className='skills--container'>
					<h3>Skills</h3>
<<<<<<< HEAD
					<p>Skills and tools I have experience with.</p>
=======
					<p>Skills and tools I have experience with</p>
>>>>>>> 87eeb9c83e60cc858456afb66ec1582da3195434
					<SkillCards skills={skills}></SkillCards>
				</div>
			</div>
		);
	}
}

export default Skills;
