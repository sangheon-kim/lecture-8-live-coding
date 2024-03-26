import { ThemeManagerProvider } from "@/contexts/ThemeManager/ThemeManager.context";
import { KanbanBoardLayout } from "@/layouts/KanbanBoard/KanbanBoard.layout";
import MainView from "@/views/Main.view";
import { MainSecondView } from "@/views/MainSecond.view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elice Twitter",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <KanbanBoardLayout>
      <MainView />
      {/* <MainSecondView /> */}
    </KanbanBoardLayout>
  );
}
