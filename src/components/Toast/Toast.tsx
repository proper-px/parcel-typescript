import React from "react";
import styled from "styled-components";
import { ToastContainer, ToastContainerProps } from "react-toastify";

interface IStyledToastProps {}

interface IToastProps extends IStyledToastProps, ToastContainerProps {}

const StyledToast = styled.div<IStyledToastProps>`
  background-color: orange;
`;

const Toast: React.FC<IToastProps> = (props) => {
  return (
    <ToastContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      rtl={false}
      pauseOnFocusLoss={true}
      pauseOnHover={true}
    />
  );
};

export default Toast;
