"use client";
import { RecoilRoot, atom } from "recoil";

export const isLoggedIn = atom({
  key: "isLoggedIn",
  default: false,
});
export default function RecoidContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
