import { memo, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/utilities/utils";

type Props = {
  onChange: (value: unknown) => void;
  data: LabeledValue<string>;
  name: string;
  notFoundMessage?: string;
  inDialog?: boolean;
  value?: string;
  setId?: (id: string | null) => void;
};

function FormCombobox({
  onChange,
  data,
  name,
  notFoundMessage,
  inDialog,
  value: initialValue,
  setId,
}: Props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(initialValue || undefined);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-full justify-between")}
        >
          {value
            ? data.find((item) => item.value === value)?.label
            : `Select ${name}`}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={cn("dropdown-width p-0", ` ${inDialog && "z-[200]"}`)}
      >
        <Command>
          <CommandInput placeholder={`Search for ${name}...`} />
          <CommandList>
            <CommandEmpty>
              {notFoundMessage ? notFoundMessage : `No ${name} found.`}
            </CommandEmpty>
            <CommandGroup>
              {data.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue) => {
                    const newValue =
                      currentValue === value ? undefined : currentValue;
                    setValue(newValue);
                    onChange(newValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === item.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default memo(FormCombobox);
