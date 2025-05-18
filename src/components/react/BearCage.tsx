import { useBearStore } from "../../states/client/store";

function BearCage() {
  const { bears } = useBearStore();

  return (
    <div className="card bg-neutral text-neutral-content w-96">
      <div className="card-body">
        <h2 className="card-title">Bear Cage</h2>
        <p>There are {bears} bears in the cage.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-warning">Open Cage</button>
        </div>
      </div>
    </div>
  );
}

export default BearCage;
