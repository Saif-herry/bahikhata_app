import { PaginationProps, ReactDispatch } from "@/types/core";
import { toast } from "react-toastify";
import Swal, { SweetAlertResult } from "sweetalert2";
import { sweetAlertCustomStyles, sweetAlertStyles } from ".";

export const toggleFullScreen = (
  isFullScreen: boolean,
  setIsFullScreen: ReactDispatch<boolean>
) => {
  const element = document.documentElement as any;
  const newDoc = document as any;
  if (!isFullScreen) {
    if (element.requestFullscreen) element.requestFullscreen();
    else if (element.mozRequestFullScreen) element.mozRequestFullScreen();
    else if (element.webkitRequestFullscreen) element.webkitRequestFullscreen();
    else if (element.msRequestFullscreen) element.msRequestFullscreen();
  } else {
    if (newDoc.exitFullscreen) newDoc.exitFullscreen();
    else if (newDoc.mozCancelFullScreen) newDoc.mozCancelFullScreen();
    else if (newDoc.webkitExitFullscreen) newDoc.webkitExitFullscreen();
    else if (newDoc.msExitFullscreen) newDoc.msExitFullscreen();
  }
  setIsFullScreen(!isFullScreen);
};

export const muiTable = {
  styles: {
    borderRadius: "5px",
    padding: "0",
    boxShadow: "none",
  },
  options: () => ({
    exportAllData: false,
    selection: false,
    actionsColumnIndex: -1,
    addRowPosition: "start",
    detailPanelColumnAlignment: "center",
    headerStyle: {
      backgroundColor: "#3341551f",
      hover: "none",
      // padding: "0",
      fontWeight: "600",
      fontSize: "1rem",
    },
  }),
};

export const errorHelper = (error: unknown) => {
  if (error instanceof Error) return toast.error(error.message);
  return toast.error("Something went wrong!");
};

export const appendUrlHelper = (state: PaginationProps<{}>, url: string) => {
  type key = keyof typeof state;
  const searchParams = new URLSearchParams(url.split("?")[1] || "");
  for (let curState in state) {
    if (state.hasOwnProperty(curState) && String(state[curState as key]))
      searchParams.set(curState, (state as any)[curState]);
  }
  const queryString = searchParams.toString();
  return queryString ? `${url.split("?")[0]}?${queryString}` : url;
};

export const notify = {
  warning: async (
    title: string,
    text: string,
    confirmButtonText: string,
    onConfirm: (result: SweetAlertResult) => Promise<void>
  ) =>
    Swal.fire({
      title,
      text,
      icon: "warning",
      iconColor: "#FF4D49",
      confirmButtonColor: "#FF4D49",
      confirmButtonText,
      cancelButtonText: "No",
      showCancelButton: true,
      customClass: sweetAlertStyles,
      backdrop: sweetAlertCustomStyles,
    }).then(onConfirm),
  success: async (
    title: string,
    text: string,
    confirmButtonText: string,
    onConfirm: (result: SweetAlertResult) => Promise<void>
  ) =>
    Swal.fire({
      title,
      text,
      icon: "success",
      iconColor: "#4f46e5",
      confirmButtonColor: "#4f46e5",
      confirmButtonText,
      cancelButtonText: "No",
      showCancelButton: false,
      customClass: sweetAlertStyles,
      backdrop: sweetAlertCustomStyles,
    }).then(onConfirm),
  error: async (
    title: string,
    text: string,
    confirmButtonText: string,
    onConfirm: (result: SweetAlertResult) => Promise<void>
  ) =>
    Swal.fire({
      title,
      text,
      icon: "error",
      iconColor: "#ed1a25ff",
      confirmButtonColor: "#ed1a25ff",
      confirmButtonText,
      cancelButtonText: "No",
      showCancelButton: false,
      customClass: sweetAlertStyles,
      backdrop: sweetAlertCustomStyles,
    }).then(onConfirm),
};
