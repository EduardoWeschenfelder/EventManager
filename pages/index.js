import { ThrottleButton } from "./components/ThrottleButton";
export default function Home() {
  const { useThrottleButton: throttleBtn1 } = ThrottleButton(2000);
  const { useThrottleButton: throttleBtn2 } = ThrottleButton(7000);
  return (
    <>
      <label>Botão 1 com delay de 2s</label>
      <button
        onClick={() => {
          throttleBtn1(() => {
            window.alert(`Evento 1 disparado`);
          });
        }}
      >
        Evento 1
      </button>
      <label>Botão 2 com delay de 7s</label>
      <button
        onClick={() => {
          throttleBtn2(() => {
            window.alert(`Evento 2 disparado`);
          });
        }}
      >
        Evento 2
      </button>
    </>
  );
}
