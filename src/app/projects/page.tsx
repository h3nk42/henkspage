import { Circle } from "@/components/Circle";
import { Header } from "../../components/Header";

export default function Projects() {
  return (
    <main>
      <div style={{ top: -150 }} className="absolute right-4 transform ml-0">
        <Circle size={500} />
      </div>
      <div style={{ top: 0 }} className="absolute right-4 transform ml-0">
        <Circle size={500} />
      </div>
      <div style={{ top: 550 }} className="absolute right-4 transform ml-0">
        <Circle size={500} />
      </div>
      <div style={{ height: 5000 }} />
    </main>
  );
}
