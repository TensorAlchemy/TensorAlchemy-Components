export function Panel({className, children}: StyleableWithChildren) {
  return (
    <div
      className={classes(
        "flex flex-col rounded-lg border [background:linear-gradient(360deg,_#21384b,_#031f37)]",
        className,
      )}
    >
      {children}
    </div>
  )
}
