interface Props {
  children: string;
  onClickHandle: () => void;
  color?: string;
}

const Button = ({ children, onClickHandle, color = "primary" }: Props) => {
  return (
    <>
      <button
        id="liveAlertBtn"
        type="button"
        className={"btn btn-" + color}
        onClick={onClickHandle}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
