import React from 'react';
import './text.css';

type TextVariants =
  | 'titleBig'
  | 'bodyTitle'
  | 'bodyBold'
  | 'bodyText'
  | 'bodySmall';

interface ITextProps extends React.HTMLProps<HTMLParagraphElement> {
  variant?: TextVariants;
  color?: string;
}

const Text: React.FC<ITextProps> = ({ children, variant, color, ...rest }) => {
  console.log('ASDASD', variant);
  return (
    <p className={variant} style={{ color: color ?? undefined }} {...rest}>
      {children}
    </p>
  );
};

export default Text;
