import { Button } from '@chakra-ui/react';
import { useFormStatus } from 'react-dom';

interface ISubmitButton {
  children: React.ReactNode;
  variant: 'accent' | 'accentAlt' | 'solid';
}

const SubmitButton: React.FC<ISubmitButton> = ({ children, variant }) => {
  const { pending } = useFormStatus();

  return (
    <Button
      variant={variant}
      transition={'all 0.3s'}
      type="submit"
      isLoading={pending}
      isDisabled={pending}
      display={'flex'}
    >
      {children}
    </Button>
  );
};
export default SubmitButton;
