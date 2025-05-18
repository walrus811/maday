import { useBearStore } from "../../states/client/store";

function CounterButton() {
  const { bears, increase } = useBearStore();

  return (
    <button onClick={() => increase(1)} className="btn btn-primary">
      bear up({bears})
    </button>
  );
}

export default CounterButton;
