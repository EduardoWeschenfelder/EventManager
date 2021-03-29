import { useThrottleButton } from "./components/exemplo";

export default function Home() {
  const { setNextClick } = useThrottleButton(() => {
    console.log("Evento disparado");
  });

  return (
    <>
      <button
        onClick={() => {
          setNextClick(2000);
        }}
      >
        Evento 1
      </button>
      <button
        onClick={() => {
          setNextClick(3000);
        }}
      >
        Evento 2
      </button>
    </>
  );
}
