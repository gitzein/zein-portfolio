import { useMemo } from "react";
import Aurora from "./Aurora";
import MeteorShower from "./MeteorShower";
import SkyGradient from "./SkyGradient";
import useTheme from "../../hooks/useTheme";

function SkyBackground() {
  const [theme] = useTheme();

  const auroraColor = useMemo(
    () =>
      theme === "light"
        ? ["#00CF52", "#00C690", "#00DF96"]
        : ["#8aed07", "#0e392f", "#743c55"],
    [theme],
  );

  return (
    <>
      <MeteorShower />
      <Aurora amplitude={2} speed={0.5} blend={0.5} colorStops={auroraColor} />
      <SkyGradient />
    </>
  );
}
export default SkyBackground;
