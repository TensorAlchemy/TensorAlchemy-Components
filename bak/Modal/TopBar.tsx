import {Theme} from ".."

export function TopBar({
  className,
  children,
  onClose,
}: StyleableWithChildren & {
  onClose?: () => void
}) {
  return (
    <div
      className={classes(
        "flex flex-row items-center justify-between rounded-t-lg p-2",
        className,
      )}
    >
      <div>{children}</div>
      <Theme.Button icon={Theme.Icon.X} onClick={() => onClose?.()} />
    </div>
  )
}
