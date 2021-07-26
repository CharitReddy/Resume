import Divider from '../divider';
import './section-header.css';

const SectionHeader = ({ context }) => {
	return (
		<div className='header'>
			<p className='header__text'>{context}</p>
			<Divider />
		</div>
	);
};

export default SectionHeader;
