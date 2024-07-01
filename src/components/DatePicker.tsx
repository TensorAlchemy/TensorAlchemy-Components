import React, {useState} from "react"
import {format} from "date-fns"
import {Calendar as CalendarIcon} from "lucide-react"

import {cn} from "@app/utils"
import {Button} from "@components/Button"
import {Calendar} from "@components/Calendar"
import {Popover, PopoverContent, PopoverTrigger} from "@components/Popover"

const DatePicker = () => {
  const [date, setDate] = useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
      </PopoverContent>
    </Popover>
  )
}

export {DatePicker}
