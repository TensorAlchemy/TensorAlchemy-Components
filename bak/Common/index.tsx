export namespace Common {
  export type Size = "sm" | "md" | "lg" | "xl"
  export namespace Size {
    export const preset = (): Size => "md"
  }

  export type Color =
    | "brand"
    | "secondary"
    | "ternary"
    | "indigo"
    | "red"
    | "green"
    | "yellow"
    | "white"
    | "zinc"
    | "whitesmoke"
  export namespace Color {
    export const preset = (): Color => "zinc"
  }
}
