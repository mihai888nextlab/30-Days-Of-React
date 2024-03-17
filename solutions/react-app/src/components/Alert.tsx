import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  btnHandle: () => void;
}

function Alert({ children, btnHandle }: Props) {
  return (
    <div className="alert alert-warning alert-dismissible fade show">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={btnHandle}
      ></button>
    </div>
  );
}

export default Alert;
