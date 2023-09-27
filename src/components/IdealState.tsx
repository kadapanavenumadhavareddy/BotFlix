import { NonIdealState } from "@blueprintjs/core";
import { Spinner } from "@blueprintjs/core";
interface props {
  state: string;
}
export default function IdealState({ state }: props) {
  const description = (
    <div>
      Your search didn't match any movie.
      <br />
      Try searching for new movie.
    </div>
  );
  const loadingDescription = <div>Getting result please wait ...</div>;
  return (
    <div className="ideal-state">
      {state === "loading" && <Spinner intent="primary" />}
      <NonIdealState
        icon={state === "loading" ? "cloud-download" : "search"}
        title={state === "loading" ? "" : "No search results"}
        description={state === "loading" ? loadingDescription : description}
        layout="vertical"
      />
    </div>
  );
}
