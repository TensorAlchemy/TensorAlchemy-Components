"use client"
import {Collapse} from "react-collapse"
import {Theme} from ".."
import Link from "next/link"
export function Accordian({open, toggle, menu}: Accordian.Props) {
  return (
    <div className="flex flex-col gap-8 pb-10 px-4">
      <div className="flex flex-row" onClick={toggle}>
        <div className="flex flex-row items-center gap-4">
          <Theme.Icon.MenuSquare size={16} />
          <div
          // className={classes(
          //   "text-xl cursor-pointer",
          //   (open as boolean) && "text-brand-1000",
          // )}
          >
            {menu.title}
          </div>
        </div>
      </div>
      <div className="px-7 flex flex-col gap-4">
        <Collapse isOpened={!!open}>
          {menu?.menuItems.map((item, index) => {
            return (
              <Link key={index} href={item.ref} className="text-sm md:text-base">
                {item.title}
              </Link>
            )
          })}
        </Collapse>
      </div>
    </div>
  )
}

export declare namespace Accordian {}

export namespace Accordian {
  export type Props = StyleableWithChildren & {
    open: number | boolean
    toggle: () => void
    menu: Menu
  }

  export interface Menu {
    title: string
    menuItems: MenuItem[]
    description: string
  }

  export interface MenuItem {
    title: string
    ref: string
  }
}
