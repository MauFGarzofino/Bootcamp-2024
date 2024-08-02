import BugIcon from "./svg/Pokemon_Type_Icon_Bug.svg";
import DarkIcon from "./svg/Pokemon_Type_Icon_Dark.svg";
import DragonIcon from "./svg/Pokemon_Type_Icon_Dragon.svg";
import ElectricIcon from "./svg/Pokemon_Type_Icon_Electric.svg";
import FairyIcon from "./svg/Pokemon_Type_Icon_Fairy.svg";
import FightingIcon from "./svg/Pokemon_Type_Icon_Fighting.svg";
import FireIcon from "./svg/Pokemon_Type_Icon_Fire.svg";
import FlyingIcon from "./svg/Pokemon_Type_Icon_Flying.svg";
import GhostIcon from "./svg/Pokemon_Type_Icon_Ghost.svg";
import GrassIcon from "./svg/Pokemon_Type_Icon_Grass.svg";
import GroundIcon from "./svg/Pokemon_Type_Icon_Ground.svg";
import IceIcon from "./svg/Pokemon_Type_Icon_Ice.svg";
import NormalIcon from "./svg/Pokemon_Type_Icon_Normal.svg";
import PoisonIcon from "./svg/Pokemon_Type_Icon_Poison.svg";
import PsychicIcon from "./svg/Pokemon_Type_Icon_Psychic.svg";
import RockIcon from "./svg/Pokemon_Type_Icon_Rock.svg";
import SteelIcon from "./svg/Pokemon_Type_Icon_Steel.svg";
import WaterIcon from "./svg/Pokemon_Type_Icon_Water.svg";

import { SvgProps } from 'react-native-svg';

const typeIcons: { [key: string]: React.FC<SvgProps> } = {
  Bug: BugIcon,
  Dark: DarkIcon,
  Dragon: DragonIcon,
  Electric: ElectricIcon,
  Fairy: FairyIcon,
  Fighting: FightingIcon,
  Fire: FireIcon,
  Flying: FlyingIcon,
  Ghost: GhostIcon,
  Grass: GrassIcon,
  Ground: GroundIcon,
  Ice: IceIcon,
  Normal: NormalIcon,
  Poison: PoisonIcon,
  Psychic: PsychicIcon,
  Rock: RockIcon,
  Steel: SteelIcon,
  Water: WaterIcon,
};

export default typeIcons;
