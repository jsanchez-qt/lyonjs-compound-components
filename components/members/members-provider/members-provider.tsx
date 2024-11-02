import { MemberModel } from "@/services/members";
import { PropsWithChildren, useMemo, useState } from "react";
import {
  MembersProviderContext,
  MembersProviderContextValue,
} from "./use-members";
import { randomUUID } from "expo-crypto";
import { List } from "./list";
import { Form } from "./form";
import { Stats } from "./stats";

export type MembersProviderProps = PropsWithChildren<{
  members: MemberModel[];
}>;

export function MembersProvider({ members, children }: MembersProviderProps) {
  const [currentMembers, setCurrentMembers] = useState(members);

  const contextValue: MembersProviderContextValue = useMemo(
    () => ({
      members: currentMembers,
      addMember: ({ name, age }) => {
        setCurrentMembers((prev) => [{ id: randomUUID(), name, age }, ...prev]);
      },
      removeMember: (memberId) => {
        setCurrentMembers((prev) =>
          prev.filter((member) => member.id !== memberId),
        );
      },
    }),
    [currentMembers, setCurrentMembers],
  );

  return (
    <MembersProviderContext.Provider value={contextValue}>
      {children}
    </MembersProviderContext.Provider>
  );
}

MembersProvider.displayName = "MembersProvider";

MembersProvider.Form = Form;
MembersProvider.List = List;
MembersProvider.Stats = Stats;
