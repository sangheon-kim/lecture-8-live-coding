import { ThemeManagerProvider } from "@/contexts/ThemeManager/ThemeManager.context";
import { KanbanBoardLayout } from "@/layouts/KanbanBoard/KanbanBoard.layout";
import MainView from "@/views/Main.view";
import { MainSecondView } from "@/views/MainSecond.view";
import Image from "next/image";

export default function Home() {
  return (
    <KanbanBoardLayout>
      <MainView />
      {/* <MainSecondView /> */}
    </KanbanBoardLayout>
  );
}
