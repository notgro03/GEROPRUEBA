import { Composition } from "remotion";
import { IGoldPromo } from "./IGoldPromo";
import { promo } from "./content";

export const RemotionRoot: React.FC = () => (
  <Composition
    id="IGoldPromo"
    component={IGoldPromo}
    durationInFrames={600}
    fps={30}
    width={1080}
    height={1920}
    defaultProps={{ promo }}
  />
);
