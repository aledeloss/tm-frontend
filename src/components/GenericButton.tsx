interface IGenericButton {
  label: string;
  action: () => void;
}
const GenericButton = ({ label, action }: IGenericButton) => {
  return (
    <button className='btn-primary' onSubmit={action}>
      {label}
    </button>
  );
};

export default GenericButton;
