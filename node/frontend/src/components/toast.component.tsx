import { Toast } from "flowbite-react";
import { useCallback, useMemo, useState } from "react";

type ToastType = "success" | "error" | "warning" | "info";

export function useToast() {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastTimeout, setToastTimeout] = useState<number>(5000);
  const [toastType, setToastType] = useState<ToastType>("success");

  const toggleToast = useCallback(() => {
    setShowToast((prev) => !prev);
  }, []);

  const showToastWithMessage = useCallback(
    (message: string, toastType: ToastType | null) => {
      setToastMessage(message);
      setShowToast(true);
      if (toastType) {
        setToastType(toastType);
      }
      setTimeout(() => {
        setShowToast(false);
      }, toastTimeout);
    },
    []
  );

  function translateBgByToastType() {
    switch (toastType) {
      case "success":
        return "bg-green-500";
      case "error":
        return "bg-red-500";
      case "warning":
        return "bg-yellow-500";
      default:
        return "";
    }
  }

  function translateTextColorByToastType() {
    switch (toastType) {
      case "success":
        return "text-white";
      case "error":
        return "text-white";
      case "warning":
        return "text-white";
      default:
        return "";
    }
  }
  const ToastComponent = () =>
    !!showToast && (
      <Toast className={`absolute bottom-5 ${translateBgByToastType()}`}>
        <div
          className={`ml-3 text-sm font-normal ${translateTextColorByToastType()}`}
        >
          {toastMessage}
        </div>
        <Toast.Toggle onDismiss={() => setShowToast(false)} />
      </Toast>
    );

  return { ToastComponent, toggleToast, showToastWithMessage };
}
