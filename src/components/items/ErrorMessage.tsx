'use client';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="text-rose-500 text-center">
      エラーが発生しました: {message}
    </div>
  );
};

export default ErrorMessage;
