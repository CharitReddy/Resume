import './professional-experience.css';

export const experienceList = [
	{
		companyName: 'Accendero Software',
		duration: {
			startDate: 'Feb 2021',
			endDate: 'May 2021',
		},
		position: 'Software Engineer Intern',
		location: 'Idaho, USA',
		responsibilities: [
			'Working on Pharmaceutical projects developing web applications using Python and Django.',
			'Working on Docker and using PostgreSQL database for the backend.',
			'Working in agile development methodology and using JIRA software, Bitbucket and Git.',
		],
	},
	{
		companyName: 'Rochester Institute of Technology',
		duration: {
			startDate: 'Aug 2020',
			endDate: 'Nov 2020',
		},
		position: 'Graduate Teaching Assistant',
		location: 'Course: Introduction to Computer Science Theory',
		responsibilities: [
			'Conducting weekly classes to introduce a new course topic along with applications.',
			'Instructing and mentoring graduate students with the course work and tasks to be accomplished.',
			'Assisting the professor during class hours with clearing doubts of the students and setting up weekly classes.',
		],
	},
];

const ProfessionalExperience = () => {
	return (
		<div className='professional-experience'>
			{experienceList.map((eachExperince) => {
				const { companyName, duration, position, location, responsibilities } =
					eachExperince;
				return (
					<section
						className='professional-experience__section'
						key={duration.startDate}
					>
						<div className='professional-experience__header'>
							<p className='professional-experience__company-name'>
								{companyName}
							</p>
							<p className='professional-experience__duration'>
								{duration.startDate} - {duration.endDate}
							</p>
						</div>
						<div>
							<p className='professional-experience__sub-heading'>
								{position} - {location}
							</p>
						</div>
						<div>
							<ul>
								{responsibilities.map((eachResponsibility) => (
									<li key={eachResponsibility}>{eachResponsibility}</li>
								))}
							</ul>
						</div>
					</section>
				);
			})}
		</div>
	);
};

export default ProfessionalExperience;
