interface ResetButtonProps {
  setSelectedPrefectures: React.Dispatch<React.SetStateAction<string[]>>;
}

const ResetButton: React.FC<ResetButtonProps> = ({
  setSelectedPrefectures,
}) => {
  return (
    <button
      className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500"
      onClick={() => setSelectedPrefectures([])}
    >
      選択解除
    </button>
  );
};

export default ResetButton;
