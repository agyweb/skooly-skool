"use client";

import { LoaderCircle } from "lucide-react";
import Cookies from "js-cookie";
import { Doc } from "../../../../../../convex/_generated/dataModel";
import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { api } from "../../../../../../convex/_generated/api";
import { userModes } from "@/constants/common";
import { useCallback, useEffect, useState } from "react";
import ChooseModePage from "./choose-mode";

type Props = {
  user: Doc<"users">;
};

export default function Guard({ user: { mode, _id } }: Props) {
  const [showChooseMode, setShowChooseMode] = useState(false);
  const { push } = useRouter();

  const serverMode = mode;
  const clientMode = Cookies.get("mode") as UserMode | undefined;
  const setUserMode = useMutation(api.users.setUserMode);

  const redirectOnboarding = useCallback(
    (mode: UserMode) => {
      if (mode === "parent") return push("/onboarding/parent");
      if (mode === "student") return push("/onboarding/student");
      return push("/onboarding/teacher");
    },
    [push],
  );

  useEffect(() => {
    if (!userModes.includes(serverMode!) && !userModes.includes(clientMode!)) {
      setShowChooseMode(true);
    } else if (serverMode && userModes.includes(serverMode)) {
      console.log("serverMode", serverMode);
      redirectOnboarding(serverMode);
    } else if (clientMode && userModes.includes(clientMode)) {
      console.log("clientMode", clientMode);
      setUserMode({ id: _id, mode: clientMode });
      redirectOnboarding(clientMode);
    }
  }, [_id, clientMode, serverMode, setUserMode, redirectOnboarding]);

  if (showChooseMode) {
    return <ChooseModePage />;
  }

  return (
    <div>
      <div className="animate-spin">
        <LoaderCircle size={30} />
      </div>
    </div>
  );
}
