import React from "react";
import {Button, Switch} from "@nextui-org/react";
import { ThemeSwitcher } from "./Switcher";

export default function ToggleComponent() {
  return (
    <Switch
      defaultSelected
      size="lg"
      color="secondary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <Button className={className} />
        ) : (
          <Button className={className} />
        )
      }
    >
    </Switch>
  );
}
