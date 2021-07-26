import './App.css';
import PersonalInfo from './components/personal-info';
import ProfessionalExperience from './components/professional-experience';
import SectionHeader from './components/section-header';

function App() {
	return (
		<div className='resume'>
			{/* <PersonalInfo /> */}
			<SectionHeader context='Professional Experience' />
			<ProfessionalExperience />
		</div>
	);
}

export default App;
