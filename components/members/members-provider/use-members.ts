import { MemberModel } from "@/services/members";
import { createContext, useContext } from "react";

export type MembersProviderContextValue = {
  members: MemberModel[];
  addMember: (member: { name: string; age: number }) => void;
  removeMember: (memberId: string) => void;
};

export const MembersProviderContext =
  createContext<MembersProviderContextValue>({} as MembersProviderContextValue);

export const useMembers = () => {
  const context = useContext(MembersProviderContext);

  if (!context) {
    throw new Error("useMembers should be used within <MembersProvider>");
  }

  return context;
};
