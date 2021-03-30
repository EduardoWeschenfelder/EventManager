// import { useThrottleButton } from "./components/exemplo";
import { useThrottleButton } from "./components/exemplo2";

export default function Home() {
  // const { setNextClick } = useThrottleButton(() => {
  //   console.log("Evento disparado");
  // });

  // return (
  //   <>
  //     <button
  //       onClick={() => {
  //         setNextClick(2000);
  //       }}
  //     >
  //       Evento 1
  //     </button>
  //     <button
  //       onClick={() => {
  //         setNextClick(3000);
  //       }}
  //     >
  //       Evento 2
  //     </button>
  //   </>
  // );

  return (
    <>
      <button
        onClick={() => {
          useThrottleButton(2000, () => {
            console.log("Evento 1 disparado");
          });
        }}
      >
        Evento 1
      </button>
      <button
        onClick={() => {
          useThrottleButton(3000, () => {
            console.log("Evento 2 disparado");
          });
        }}
      >
        Evento 2
      </button>
    </>
  );
}
