import { CreateForm } from '../components';
import { useNavigate } from 'react-router-dom';

export function CreateFormPage() {
  const navigate = useNavigate();

  const handleCallback = () => {
    navigate('/');
  }
  
  return (
    <CreateForm cb={handleCallback} />
  )
}
