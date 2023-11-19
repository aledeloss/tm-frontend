import { Link } from 'react-router-dom';

interface ILinkProps {
  label: string;
  redirectsTo: string;
}
const GenericLink = ({ label, redirectsTo }: ILinkProps) => {
  return (
    <Link
      className='btn-primary'
      to={redirectsTo}
    >
      {label}
    </Link>
  );
};

export default GenericLink;
