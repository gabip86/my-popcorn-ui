export interface ButtonProps {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  testId: string;
  theme: 'primary' | 'secondary';
}