import Avatar from "./Avatar";

function AppBar() {
  return (
    <>
      <div className="flex justify-between px-6 py-3 border-b border-zinc-200 text-lg font-bold">
        <div>Medium</div>
        <Avatar name={"Roy"} size={"8"}/>
      </div>
    </>
  );
}

export default AppBar;
