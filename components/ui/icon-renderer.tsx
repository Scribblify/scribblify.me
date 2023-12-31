import type { FC } from "react";

type IconRendererProps = {
  children: React.ReactElement;
  onClick?: () => void;
  className?: string;
};

type IconRendererWithTextType = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const IconRenderer: FC<IconRendererProps> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <div
      tabIndex={0}
      onClick={onClick}
      className={`flex items-center justify-center w-[32px] h-[32px] p-1 cursor-pointer dark:hover:bg-[#323232] hover:bg-[#e8e8e8] transition-colors rounded-md  ${className}`}
    >
      {children}
    </div>
  );
};

const IconRendererWithText: FC<IconRendererWithTextType> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center p-2 gap-2 h-[32px] cursor-pointer dark:hover:bg-[#323232] hover:bg-[#e8e8e8] transition-colors rounded-md ${className}`}
    >
      {children}
    </div>
  );
};

export { IconRendererWithText, IconRenderer };
