import Button from "@material-ui/core/Button";

export default function Home() {
  const onClick = useCallback((e, row) => {
    e.preventDefault();
    router.push({
      pathname: "/add",
    });
  });
  return (
    <div className="container">
      <Button onClick={onClick}>アプリへ</Button>
    </div>
  );
}
