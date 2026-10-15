import useOnlineStatus from "./hooks/UseOnlineStatus";

function ConnectionStatus() {
  const isOnline = useOnlineStatus();

  return <p>Status: {isOnline ? "Online" : "Offline"}</p>;
}

export default ConnectionStatus;
